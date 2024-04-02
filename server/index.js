require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URL = "mongodb+srv://navishgoyal48:navishng@travelwitheaze.ktye579.mongodb.net/TravelWithEaze?retryWrites=true&w=majority&appName=TravelWithEaze";
// MONGODB CONNECTION
console.log(MONGODB_URL);
mongoose.connect(MONGODB_URL)
.then(() => console.log("Connected to Database!"))
.catch((err) => console.log(err));

//user Schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String
});

const userModel = mongoose.model("user",userSchema);

app.get("/",(req,res) => {
    res.send("TRAVEL WITH EAZE!!!");
});

app.post("/signup",async(req,res) => {
    console.log(req.body);
    const {email} = req.body;

    const data = await userModel.findOne({email: email});

    if(data){
        res.send({message: "Email is already registered!",alert: false});
    }
    else{
        const data = userModel(req.body);
        const save = data.save();
        res.send({message: "Successfully sign up!" ,alert: true})
    }
})


app.listen(PORT,() => {
    console.log(`Server running ar port ${PORT}:`);
});