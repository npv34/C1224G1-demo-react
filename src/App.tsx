import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import UserList from "./components/Users/UserList";
import Master from "./components/Layouts/Master.tsx";
import UserAdd from "./components/Users/UserAdd";
import UserEdit from "./components/Users/UserEdit";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <>
       <Routes>
           <Route path={"/login"} element={<Login/>}/>
           <Route path={"/admin"} element={<Master/>}>
               <Route path={"users"} element={<UserList/>}/>
               <Route path={"users/create"} element={<UserAdd/>}/>
               <Route path={"users/:id/edit"} element={<UserEdit/>}/>
           </Route>
       </Routes>
        <ToastContainer />
    </>
  )
}

export default App
