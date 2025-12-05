import { NavLink } from "react-router";
import Button from "../component/ui/Button";
import Ahref from "../component/ui/Ahref";

export default function Header(){
    return(<>
        <div className="w-full h-20 border flex bg-blue-300 fixed">

            <div className="w-7xl flex justify-around items-center">
                <Ahref to="/">Home</Ahref>
                <Ahref to="/todo">Todo</Ahref>
                <Ahref to="/contact">Contact</Ahref>
                <Ahref to="/about">About</Ahref>
            </div>
            
            <div className="w-72 flex justify-around items-center">
                <NavLink to="/login">
                    <Button>Login</Button>
                </NavLink>
                <NavLink to="/signupRHF">
                    <Button>Sign Up</Button>
                </NavLink>
            </div>
            
        </div>
    </>)
}