import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cars", (req, res) => {
  res.json({ cars: ["Audi", "BMW", "Skoda", "Toyota"] });
});

app.get("/animals", (req, res) => {
  res.json(["Dog", "Cat", "Rabbit", "Cow"]);
});

app.get("/persons", (req, res) => {
  res.json([
    { name: "Robin", age: 38, gender: "Male" },
    { name: "Emma", age: 25, gender: "Female" },
    { name: "Helene", age: 32, gender: "Female" },
    { name: "August", age: 35, gender: "Male" },
  ]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
