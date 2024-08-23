const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define an Employee schema
const employeeSchema = new mongoose.Schema({
  uid: Number,
  name: String,
  email: String,
  address: String,
  phone: String,
  dob: String,
  doj: String,
  salary: Number,
  designation: String,
});

// Create a model based on the schema
const Employee = mongoose.model("Employee", employeeSchema);

// Endpoint to add an employee
app.post("/addEmployee", async (req, res) => {
  const employee = new Employee(req.body);
  console.log("Received employee:", employee);

  try {
    await employee.save();
    res.status(200).send("Employee added successfully");
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send("Error adding employee");
  }
});

// Endpoint to fetch all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching employees");
  }
});

// Endpoint to search employees by UID
app.get("/employees/search", async (req, res) => {
  const { uid } = req.query;

  try {
    const employee = await Employee.findOne({ uid: Number(uid) });
    if (employee) {
      res.status(200).json([employee]);
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    console.error("Error searching employee:", error);
    res.status(500).send("Error searching employee");
  }
});

// Endpoint to fetch employee by UID
app.get("/employees/:uid", async (req, res) => {
  const { uid } = req.params;

  try {
    const employee = await Employee.findOne({ uid: Number(uid) });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).send("Error fetching employee");
  }
});

// Endpoint to update employee by UID
app.put("/employees/:uid", async (req, res) => {
  const { uid } = req.params;
  const updatedData = req.body;

  try {
    const employee = await Employee.findOneAndUpdate(
      { uid: Number(uid) },
      updatedData,
      { new: true }
    );
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Error updating employee");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
