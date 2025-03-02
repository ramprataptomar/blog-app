import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json("Done");
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})