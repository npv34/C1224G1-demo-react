import {useEffect, useState} from "react";
import {Button, Form, Table} from "react-bootstrap";
import {Link} from "react-router";


const data = [
    {
        id: 1,
        name: "Nam",
        email: "nam@gmail.com",
        phone: '09898987',
        active: true
    },
    {
        id: 2,
        name: "Nam",
        email: "nam2@gmail.com",
        phone: '09898987',
        active: false
    },
    {
        id: 3,
        name: "Nam",
        email: "nam@gmail.com",
        phone: '09898987',
        active: false
    }
]

function UserList() {

    const [users, setUsers] = useState(data);

    const handleDeleteUser = (index: number) => {
        if (!confirm('Are you sure? ')) {
            return;
        }
        users.splice(index, 1);
        setUsers([...users]);
    }

    const handleChangeStatus = (index: number) => {
        users[index].active = !users[index].active;
        setUsers([...users]);
    }

    useEffect(() => {
        console.log("Component user list did mount")
        return () => {
            console.log("Component user list unmount")
        }
    }, [])

    useEffect(() => {
        console.log("Component user list did update")
    }, [users]);

    return (
        <>
            <h1>User List</h1>
            <Link to={"/admin/users/create"}>
                <Button variant={"success"}>Create</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Form>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    checked={user.active}
                                    label={user.active ? 'Active' : 'Deactivate'}
                                    onChange={() => handleChangeStatus(index)}
                                />
                            </Form>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleDeleteUser(index)}>Delete</Button>
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