const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const routes = require("./routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://Gading:GadingAulia14@cluster0.axfip0c.mongodb.net/TPA5-ToDoListApp?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Lanjutkan dengan konfigurasi server atau operasi lain yang Anda perlukan
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
  });

app.use(routes);

app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
