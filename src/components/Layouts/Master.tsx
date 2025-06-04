import HeaderTop from "./HeaderTop";
import {Navigate, Outlet} from "react-router";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";

function Master() {
    const auth = useSelector(state => state.auth)

    if (!auth.isLogin) {
        return <Navigate to={"/login"}/>
    }

    return (
        <>
            <HeaderTop pageTitle={"Shop app"}/>
            <Grid container
                  spacing={2}
                  direction="row"
                  sx={{
                      justifyContent: "center",
                      alignItems: "center",
                  }}
            >
                <Grid size={10}>
                    <Outlet/>
                </Grid>
            </Grid>
        </>
    )
}

export default Master;