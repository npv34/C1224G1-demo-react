import {Container, Navbar} from "react-bootstrap";
import FormSearch from "./FormSearch.tsx";
import DropdownMenu from "./DropdownMenu.tsx";
import {useSelector} from "react-redux";

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

    const auth = useSelector(state => state.auth)
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
                    <Navbar.Brand>Xin chao: {auth.email}</Navbar.Brand>
                   <FormSearch actionGetKeyword={getKeyword} />
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderTop;