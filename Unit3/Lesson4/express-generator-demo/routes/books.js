const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

let books = require("../data/books");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to DB')
}