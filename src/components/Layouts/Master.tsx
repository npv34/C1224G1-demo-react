import HeaderTop from "./HeaderTop";
import {Outlet} from "react-router";

function Master() {
    return (
        <>
            <HeaderTop pageTitle={"Shop app"}/>
            <Outlet/>
        </>
    )
}

export default Master;