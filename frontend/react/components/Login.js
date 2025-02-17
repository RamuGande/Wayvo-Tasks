
import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    function handleLogin() {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const user = existingUsers.find(user => user.email === email && user.password === password);
        if (user) {
            alert(`Welcome, ${user.username}! Logged in Successfully`);
            
            navigate("/todo")
        }
        else {
            alert("Invalid email or password!");
        }
    }
    return (
        <>
            
        <div className="main">
            <div className="login_container">
                <h3>Login</h3>
                <label for="username">Email:  <input type="text" required placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input></label>
                <label for="password">Password:<input type="password" required  placeholder="Enter your password" onChange ={(e)=>setPassword(e.target.value)}></input> </label>
                <button onClick={handleLogin}>Login</button>
                <p>Don't have an account? <a href="/Signup">Signup</a></p>
            </div>
        </div>
            
            
        </>
    );
}
