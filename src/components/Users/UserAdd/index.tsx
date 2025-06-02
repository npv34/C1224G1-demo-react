import {useFormik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from 'yup';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {CircularProgress, InputLabel, NativeSelect, Switch} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import UserService from "../../../services/user.service.ts";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import RoleService from "../../../services/role.service.ts";

const addUserSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .length(9)
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

function UserAdd() {
    const [roles, setRoles] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        // call api getAllRole
        RoleService.getAll().then(res => {
            setTimeout(() => {
                setRoles(res.data)
            }, 500)
        })
    }, [])

    const formAdd = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            active: false,
            roleId: 1
        },
        validationSchema: addUserSchema,
        onSubmit:(values) => {
            console.log(values)
            // call api create user
            UserService.createUser(values).then(res => {
                toast.success("Create user success")
                navigate("/admin/users")
            }).catch(err => {
                toast.error("Create user error")
            })

        }

    })


    return (
        <>
            <h1>Add user</h1>
            { roles.length == 0 ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            ): (
                <Box
                    component="form"
                    sx={{'& > :not(style)': {m: 1, width: '50ch'}}}
                    noValidate
                    autoComplete="off"
                    onSubmit={formAdd.handleSubmit}
                >
                    <div>
                        <TextField
                            error={!!formAdd.errors.name}
                            fullWidth id="outlined-basic"
                            onChange={formAdd.handleChange}
                            helperText={formAdd.errors.name}
                            name={"name"}
                            label="Name" type={"text"} variant="outlined"/>
                    </div>
                    <div>
                        <TextField
                            error={!!formAdd.errors.email}
                            onChange={formAdd.handleChange}
                            helperText={formAdd.errors.email}
                            fullWidth id="outlined-basic" type={"email"} name={"email"} label="Email" variant="outlined"/>
                    </div>
                    <div>
                        <TextField
                            error={!!formAdd.errors.phone}
                            onChange={formAdd.handleChange}
                            fullWidth id="outlined-basic"
                            helperText={formAdd.errors.phone}
                            type={"text"} name={"phone"} label="Phone" variant="outlined"/>
                    </div>
                    <div>
                        {roles.length > 0 && (
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Roles
                                </InputLabel>
                                <NativeSelect
                                    onChange={formAdd.handleChange}
                                    name={"roleId"}
                                    defaultValue={1}
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
                            onChange={formAdd.handleChange}
                            value="bottom"
                            control={
                                <Switch name="active" />
                            }
                            label="Active"
                            labelPlacement="start"
                        />
                    </div>
                    <div>
                        <Button type={"submit"} variant={"outlined"}>Submit</Button>
                    </div>

                </Box>
            )}

        </>
    )
}

export default UserAdd;