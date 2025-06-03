import {Button, Nav, NavDropdown} from "react-bootstrap";
import MenuItem from "./MenuItem.tsx";
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/features/auth/authSlice.ts";

function DropdownMenu({listItem}) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Nav className="me-auto">
            <MenuItem url={"/home"} title={"Home"}/>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                { listItem.map((item) => (
                    <NavDropdown.Item href={item.url}>{item.title}</NavDropdown.Item>
                ))}
                <NavDropdown.Item onClick={handleLogout}>
                        Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default DropdownMenu;