import {Container, Navbar} from "react-bootstrap";
import FormSearch from "./FormSearch.tsx";
import DropdownMenu from "./DropdownMenu.tsx";

const menuDropDownItem = [
    {
        id: 1,
        title: "Quan ly san pham",
        url: "http://..."
    },
    {
        id: 2,
        title: "Quan ly nguoi dung",
        url: "http://......."
    }
]

function HeaderTop({pageTitle}) {


    const getKeyword = (keyword) => {
        alert(keyword)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">{pageTitle}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <DropdownMenu listItem={menuDropDownItem}/>
                    </Navbar.Collapse>
                   <FormSearch actionGetKeyword={getKeyword} />
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderTop;