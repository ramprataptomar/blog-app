import axios from "axios";
import { useState } from "react"

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    );

    const login = async (inputs) => {
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    }

    const logout = async (inputs) => {
        await axios.post("/auth/logout", inputs);
        setCurrentUser(null);
    }
}