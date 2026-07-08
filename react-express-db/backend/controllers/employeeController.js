const Employee = require("../models/employee");

// GET ALL
exports.findAll = async (req, res) => {
    const employees = await Employee.findAll({
        order: [["id", "ASC"]],
    });

    res.json(employees);
};

// GET BY ID
exports.findOne = async (req, res) => {

    const employee = await Employee.findByPk(req.params.id);

    if (!employee)
        return res.status(404).json({
            message: "Data tidak ditemukan",
        });

    res.json(employee);
};

// ADD
exports.create = async (req, res) => {

    const employee = await Employee.create(req.body);

    res.status(201).json({
        message: "Data berhasil ditambahkan",
        data: employee,
    });

};

// UPDATE
exports.update = async (req, res) => {

    const employee = await Employee.findByPk(req.params.id);

    if (!employee)
        return res.status(404).json({
            message: "Data tidak ditemukan",
        });

    await employee.update(req.body);

    res.json({
        message: "Data berhasil diupdate",
        data: employee,
    });

};

// DELETE
exports.remove = async (req, res) => {

    const employee = await Employee.findByPk(req.params.id);

    if (!employee)
        return res.status(404).json({
            message: "Data tidak ditemukan",
        });

    await employee.destroy();

    res.json({
        message: "Data berhasil dihapus",
    });

};