import HeaderTop from "./HeaderTop";
import {Navigate, Outlet} from "react-router";
import {useSelector} from "react-redux";

function Master() {
    const auth = useSelector(state => state.auth)

    if (!auth.isLogin) {
        return <Navigate to={"/login"}/>
    }

    return (
        <>
            <HeaderTop pageTitle={"Shop app"}/>
            <Outlet/>
        </>
    )
}

export default Master;