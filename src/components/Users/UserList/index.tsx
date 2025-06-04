import {useEffect, useState} from "react";
import {Button, Form, Table} from "react-bootstrap";
import {Link} from "react-router";
import UserService from "../../../services/user.service.ts";
import {toast} from "react-toastify";
import { Input } from "@mui/material";


function UserList() {

    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);

    const handleDeleteUser = (id: number) => {
        if (!confirm('Are you sure? ')) {
            return;
        }
        // call api delete
        UserService.deleteUserById(id).then((res) => {
            toast.success("Delete success")
            setReload(!reload);
        }).catch(error => {

        })
    }

    const handleChangeStatus = (e, id) => {
        UserService.changeStatusUser(e.target.checked, id).then(res => {
            toast.success("Change status user success");
            setReload(!reload);
        })
    }

    useEffect(() => {
        // call api de get data hien thi
        UserService.getAllUser().then(res => {
            setUsers(res.data);
        })
    }, [reload])

    useEffect(() => {
        console.log("Component user list did update")
    }, [users]);

    const handleSearch = (event: any) => {
        const keyword: string = event.target.value;
        UserService.searchByName(keyword).then(res => {
            setUsers(res.data)
        })
    }

    return (
        <>
            <h1>User List</h1>
            <Link to={"/admin/users/create"}>
                <Button variant={"success"}>Create</Button>
            </Link>
            <Input onChange={(e) => handleSearch(e)}/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Active</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { users.map((user: any, index: number) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.role.name}</td>
                        <td>
                            <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    checked={user.active}
                                    label={user.active ? 'Active' : 'Deactivate'}
                                    onChange={(e) => handleChangeStatus(e, user.id)}
                                />
                            </Form>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                            <Link to={`/admin/users/${user.id}/edit`}>
                                <Button variant="primary">Edit</Button>
                            </Link>

                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default UserList;