import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import UserService from "../../../services/user.service.ts";
import {Card, CircularProgress, Grid, InputLabel, NativeSelect, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RoleService from "../../../services/role.service.ts";
import FormControl from "@mui/material/FormControl";
import {useFormik} from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";

function UserEdit() {
    const {id} = useParams();
    const [roles, setRoles] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        // call api lay data user update
        getData(id).then(res => {
            const dataUserUpdate = res[0].data;
            console.log(dataUserUpdate)
            const listRole = res[1].data;
            //setUser(dataUserUpdate);
            formEditUser.setValues(dataUserUpdate)
            setRoles(listRole)
        })
    }, [])


    const getData = (id: number) => {
        return Promise.all([UserService.findById(id), RoleService.getAll()])
    }


    const formEditUser = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            active: "",
            roleId: ""
        },
        onSubmit: values => {
            UserService.updateUser(values, id).then(res => {
                toast.success("Update user success")
                navigate("/admin/users")
            })
        }
    })


    return (
        <>
            <h1>User edit: {id}</h1>
            <Grid
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card variant="outlined">
                    {roles.length == 0 ? (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    ): (
                        <Box
                            onSubmit={formEditUser.handleSubmit}
                            component="form"
                            sx={{'& .MuiTextField-root': {m: 1, width: '50ch'}}}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Name"
                                    name={"name"}
                                    onChange={formEditUser.handleChange}
                                    defaultValue={formEditUser.values.name}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    name={"email"}
                                    onChange={formEditUser.handleChange}

                                    defaultValue={formEditUser.values.email}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Phone"
                                    name={"phone"}
                                    onChange={formEditUser.handleChange}

                                    defaultValue={formEditUser.values.phone}
                                />
                            </div>
                            <div>
                                {roles.length > 0 && (
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Roles
                                        </InputLabel>
                                        <NativeSelect
                                            onChange={formEditUser.handleChange}

                                            name={"roleId"}
                                            defaultValue={formEditUser.values.roleId}
                                            inputProps={{
                                                name: 'roleId',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            {roles.map(role => <option value={role.id}>{role.name}</option>)}
                                        </NativeSelect>
                                    </FormControl>
                                )}
                            </div>
                            <div>
                                <FormControlLabel
                                    value="bottom"
                                    name={"active"}
                                    checked={!!formEditUser.values.active}
                                    onChange={formEditUser.handleChange}

                                    control={
                                        <Switch name="active" />
                                    }
                                    label="Active"
                                    labelPlacement="start"
                                />
                            </div>
                            <div>
                                <Button type={"submit"} variant={"outlined"}>Save</Button>
                                <Link to={"/admin/users"}>
                                    <Button type={"button"} >Cancel</Button>
                                </Link>
                            </div>
                        </Box>
                    )}

                </Card>
            </Grid>
        </>
    )
}

export default UserEdit;