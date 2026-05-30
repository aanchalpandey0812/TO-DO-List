const errorHandler = require("./middleware/errorMiddleware");
require("dns").setDefaultResultOrder("ipv4first");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo API Running");
});

app.use("/api/tasks", todoRoutes);

const PORT = process.env.PORT || 5000;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});