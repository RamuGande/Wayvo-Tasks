import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    function handleSignup() {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some(user => user.email === email);
        if (userExists) {
            alert("Email already registered!");
            return;
        }
        const newUser = { email, username, password };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        navigate("/login");
        alert("Signup successful!");
        

    }
    return (
        <>  
            <div className="main">
                <div className = "signup_container">
                    <h3>Signup</h3>
                    <label htmlFor="email">Email:<input type="email" required placeholder="Enter your email" onChange ={(e)=>e.target.value!=""? setEmail(e.target.value) : alert("email required")}></input> </label>
                    <label htmlFor="username">Username:  <input type="text" required  placeholder="Enter your username"  onChange ={(e)=>e.target.value!=""?setUsername(e.target.value):alert("username required")}></input></label>
                    <label htmlFor="password">Password:<input type="password" required  placeholder="Enter your password" onChange={(e)=>e.target.value!=""?setPassword(e.target.value):alert("password required")}></input> </label> 
                    <button onClick = {handleSignup}>Signup</button>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
                
                
        </>
    );
}

