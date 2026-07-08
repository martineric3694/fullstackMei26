import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {

    const empty = {
        name: "",
        position: "",
        salary: ""
    };

    const [employees, setEmployees] = useState([]);

    const [form, setForm] = useState(empty);

    const [editId, setEditId] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        const res = await api.get("/employees");

        setEmployees(res.data);

    }

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        if (editId == null) {

            await api.post("/employees", form);

        } else {

            await api.put("/employees/" + editId, form);

        }

        setForm(empty);

        setEditId(null);

        loadData();

    }

    function handleEdit(emp) {

        setEditId(emp.id);

        setForm({

            name: emp.name,
            position: emp.position,
            salary: emp.salary

        });

    }

    async function handleDelete(id) {

        if (!window.confirm("Yakin ingin menghapus data?"))
            return;

        await api.delete("/employees/" + id);

        loadData();

    }

    return (

        <div style={{ padding: 30 }}>

            <h2>CRUD Employee React + Express</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Nama"
                    value={form.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="position"
                    placeholder="Posisi"
                    value={form.position}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="salary"
                    placeholder="Salary"
                    value={form.salary}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">

                    {editId ? "Update" : "Tambah"}

                </button>

            </form>

            <br />

            <table border="1" cellPadding="8">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Nama</th>

                        <th>Posisi</th>

                        <th>Salary</th>

                        <th>Aksi</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map(emp => (

                        <tr key={emp.id}>

                            <td>{emp.id}</td>

                            <td>{emp.name}</td>

                            <td>{emp.position}</td>

                            <td>{emp.salary}</td>

                            <td>

                                <button onClick={() => handleEdit(emp)}>

                                    Edit

                                </button>

                                {" "}

                                <button onClick={() => handleDelete(emp.id)}>

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}