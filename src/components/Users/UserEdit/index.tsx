import {useParams} from "react-router";

function UserEdit() {
    const {id} = useParams();

    return (
        <>
            <h1>User edit: {id}</h1>
        </>
    )
}

export default UserEdit;