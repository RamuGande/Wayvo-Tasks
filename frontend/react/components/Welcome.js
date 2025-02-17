import { useNavigate } from "react-router-dom";

export default function Welcome(){
    const navigate = useNavigate();
    function gotoLogin(){
            navigate("/login");
    }
    function gotoSignup(){
        navigate("/signup");
    }
    return(
        <div className="main">
        <div className="welcome_container">

            <h1>Welcome to Todo Application</h1>
            <button onClick = {gotoLogin}>Login</button>
            <button onClick ={gotoSignup}>Signup</button>
        </div>
          </div>  
        
    );
}