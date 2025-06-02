import {Nav, NavDropdown} from "react-bootstrap";
import MenuItem from "./MenuItem.tsx";

function DropdownMenu({listItem}) {
    return (
        <Nav className="me-auto">
            <MenuItem url={"/home"} title={"Home"}/>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                { listItem.map((item) => (
                    <NavDropdown.Item href={item.url}>{item.title}</NavDropdown.Item>
                ))}
            </NavDropdown>
        </Nav>
    )
}

export default DropdownMenu;