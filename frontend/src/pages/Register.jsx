// import '/login.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value });
    }
    
    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post("/api/auth/register", inputs);
            navigate("/login");
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className="auth">
            <form>
                <input type="text" placeholder="username" name="username" onChange={handleChange}></input>
                <input type="email" placeholder="email" name="email" onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button onClick={handleRegister}>Register</button>
                {error && <span className="error">{error}</span>}
                <span> 
                    Do you have an account?
                    <Link to="/login"> Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register;
