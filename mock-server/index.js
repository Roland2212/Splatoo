import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 5200;

app.listen(PORT, () => console.log(chalk.cyan(`Server running on Port: http://localhost:${PORT}`)));
