import {Nav} from "react-bootstrap";

function MenuItem({title, url}) {
    return <Nav.Link href={url}>{title}</Nav.Link>
}

export default MenuItem;