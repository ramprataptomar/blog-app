import bcrypt, { compareSync } from 'bcryptjs';
import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        // CHECK EXISTING USER
        const q1 = "SELECT * FROM users WHERE email = ? OR username = ?";
        db.query(q1, [req.body.email, req.body.username], (err, data) => {
            if (err) return res.status(500).json(err); // Internal Server Error
            if (data?.length) return res.status(409).json("User already exists"); // Conflict

            // HASH THE PASSWORD AND CREATE THE USER
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const q2 = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)";
            const values = [req.body.username, req.body.email, hash];

            db.query(q2, [values], (err) => {
                if (err) return res.status(500).json(err); // Internal Server Error
                return res.status(200).json("User created successfully"); // Success
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something went wrong");
    }
}

export const login = async (req, res) => {
    try {
        const q = "SELECT * FROM users WHERE username = ?";
    
        db.query(q, [req.body.username], (err, data) => {
            if(err) return res.status(500).json("Something went wrong"); // Internal Server Error
            if(data.length === 0) return res.status(404).json("User not found");
    
            const isValid = compareSync(req.body.password, data[0].password);
            if(!isValid) return res.status(401).json("Incorrect password");
    
            const token = jwt.sign({id: data[0].id}, "jwtkey");
            const { password, ...other } = data[0];
    
            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200).json(data[0])
        })
    } catch (error) {
        console.log(error);
    }
}

export const logout = (req, res) => {
    
}