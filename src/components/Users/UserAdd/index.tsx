import {useFormik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";

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
    const navigate = useNavigate();

    const formAdd = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            active: false
        },
        validationSchema: addUserSchema,
        onSubmit:(values) => {
            console.log(values)
            navigate("/admin/users")
        }

    })


    return (
        <>
            <h1>Add user</h1>
            <Form noValidate onSubmit={formAdd.handleSubmit}>
                Name:
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Control onChange={formAdd.handleChange} type="text" name={"name"} placeholder="City" required/>
                    { formAdd.errors.name && formAdd.touched.name && (
                        <Form.Control.Feedback type="invalid">
                            { formAdd.errors.name}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                Email:
                <input onChange={formAdd.handleChange}  type="text" name={"email"}/>
                Phone:
                <input onChange={formAdd.handleChange}  type="text" name={"phone"}/>
                <button type={"submit"}>Save</button>
            </Form>
        </>
    )
}

export default UserAdd;