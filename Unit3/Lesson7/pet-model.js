const mongoose = require('mongoose');

//define the schema (have to define schema first)
const petSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true //trims spaces if entered for name
        }, //can add requirements to variables
        breed: {
            type: String
        },
        age: {
            type: Number
        },
        color: {
            type: String
        },
        vaccinated: {
            type: Boolean,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
});

//define the model (define model AFTER schema)
const Pet = mongoose.model('Pet', petSchema);

//export model for further use
module.exports = Pet;