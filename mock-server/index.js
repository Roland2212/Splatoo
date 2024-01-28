import express from "express";
import cors from "cors";
import chalk from "chalk";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/user", userRoutes);

console.log(process.env.SERVER_PORT);

const PORT = process.env.SERVER_PORT || 9000;

app.listen(PORT, () => console.log(chalk.cyan(`Server running on Port: http://localhost:${PORT}`)));
