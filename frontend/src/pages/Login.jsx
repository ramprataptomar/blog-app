import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value });
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post("/api/auth/login", inputs);
            navigate("/");
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className="auth">
            <form>
                <input type="text" placeholder="username" name="username" onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" onClick={handleChange}></input>
                <button onClick={handleLogin}>Login</button>
                {error && <span className="error">{error}</span>}
                <span> 
                    Don't you have an account?
                    <Link to="/register"> Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;
