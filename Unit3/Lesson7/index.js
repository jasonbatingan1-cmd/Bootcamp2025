const express = require('express');
const mongoose = require('mongoose');
const Pet = require('./pet-model');
const asyncHandler = require('express-async-handler');

const app = express();
app.use(express.json());

const PORT = 3000

//initiate server on localhost to listen on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to DB')
}

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(() => console.log("Error connecting to DB"), err)

//CRUD operation for pets
//GET all pets
app.get('/pets', asyncHandler(async (req, res) => {
    const pets = await Pet.find();
    res.status(200).json(pets);
}));

//CREATE new pet
app.post('/pets', asyncHandler(async (req, res) => {
    const {name, breed, age, color, vaccinated} = req.body;
    
    const savedPet = await Pet.create({name, breed, age, color, vaccinated});
    
    res.status(201).json(savedPet);
}));

//UPDATE existing pet
//DELETE existing pet
