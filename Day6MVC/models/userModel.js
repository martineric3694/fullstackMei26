let users = [
    {
        id:1,
        nama:"Andi",
        jabatan:"Programmer"
    },
    {
        id:2,
        nama:"Budi",
        jabatan:"Tester"
    },
    {
        id:3,
        nama:"Joko",
        jabatan:"Project Manager"
    },
];

function getAllUser(){
    return users;
}

function addUser(data={}){
    let userAdded = [...users,data];
    users = userAdded
    return users;
}

module.exports={
    getAllUser,
    addUser
};