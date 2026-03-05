require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/projects",require("./routes/projectRoutes"));
app.use("/api/contact",require("./routes/contactRoutes"));
app.use("/api/auth",require("./routes/authRoutes"));
app.listen(5000);