import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use("/user", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);  
});