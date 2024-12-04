const express = require ('express');
const mongoose = require("mongoose");

const routes = require('./routes/api'); // import the routes

const app = express();









app.use(express.json());














app.use('/', routes); //to use the routes

app.get("/", function (req, res) {
    res.json({message: "Hello world! 🤙"});
});


const start = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://Toinou:Df8ejwc4aFrVwrDY@cluster0.om2g9.mongodb.net/Capocapo?retryWrites=true&w=majority&appName=Capocapo"
    );
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
};
start();
