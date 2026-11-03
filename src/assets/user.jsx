
import { useState } from "react";
import usersData from "./user.json";

export function UserList() {

    const [users, setUsers] = useState(usersData);
    const [editId, setEditId] = useState(null);
    const [editUser, setEditUser] = useState({});

    // edit user
    function handleEdit(user) {
        setEditId(user.id);
        setEditUser({...user, name:{...user.name}});
    }

    // handle input changes
    function handleChange(e) {
        const {name,value} = e.target;

        if(name === "firstname" || name === "lastname") {
            setEditUser({
                ...editUser,
                name:{
                    ...editUser.name,
                    [name]:value
                }
            });
        } else {
            setEditUser({...editUser,[name]:value});
        }
    }

    // save user
    function handleSave() {
        setUsers(users.map(user =>
            user.id === editId ? editUser : user
        ));
        setEditId(null);
    }

    // cancel editing
    function handleCancel() {
        setEditId(null);
    }

    // delete user
    function handleDelete(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if(confirmDelete) {
            setUsers(users.filter(user => user.id !== id));
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary fw-bold mb-4">
                User Details
            </h2>

            <table className="table table-bordered text-center border-dark shadow">
                <thead className="table-dark">
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Full Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Username</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="p-3">{user.id}</td>

                            <td className="p-2">
                                {editId === user.id ? (
                                    <>
                                        <input className="form-control mb-1"
                                            name="firstname"
                                            value={editUser.name.firstname}
                                            onChange={handleChange}
                                        />
                                        <input className="form-control"
                                            name="lastname"
                                            value={editUser.name.lastname}
                                            onChange={handleChange}
                                        />
                                    </>
                                ) : (
                                    <span className="fw-bold text-capitalize">
                                        {user.name.firstname} {user.name.lastname}
                                    </span>
                                )}
                            </td>

                            <td className="p-2">
                                {editId === user.id ? (
                                    <input className="form-control"
                                        name="email"
                                        value={editUser.email}
                                        onChange={handleChange}
                                    />
                                ) : user.email}
                            </td>

                            <td className="p-2">
                                {editId === user.id ? (
                                    <input className="form-control"
                                        name="username"
                                        value={editUser.username}
                                        onChange={handleChange}
                                    />
                                ) : user.username}
                            </td>

                            <td className="p-2">
                                {editId === user.id ? (
                                    <input className="form-control"
                                        name="phone"
                                        value={editUser.phone}
                                        onChange={handleChange}
                                    />
                                ) : user.phone}
                            </td>

                            <td className="p-2">
                                {editId === user.id ? (
                                    <>
                                        <button className="btn btn-success btn-sm me-1"
                                            onClick={handleSave}>
                                            Save
                                        </button>
                                        <button className="btn btn-secondary btn-sm"
                                            onClick={handleCancel}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-primary btn-sm me-1"
                                            onClick={() => handleEdit(user)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
