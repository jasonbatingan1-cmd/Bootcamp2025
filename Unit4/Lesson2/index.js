const express = require('express');
const router = express.Router();
const ejs = require('ejs');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//create 5 recipes with title and description and render it on the recipes.ejs file
const recipes = [
    { title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'] },
    { title: 'Chicken Alfredo', ingredients: ['Fettuccine', 'Chicken breast', 'Alfredo sauce', 'Parmesan cheese'] },
    { title: 'Vegetable Stir Fry', ingredients: ['Broccoli', 'Bell peppers', 'Carrots', 'Soy sauce'] },
    { title: 'Beef Tacos', ingredients: ['Taco shells', 'Ground beef', 'Lettuce', 'Tomatoes'] },
    { title: 'Caesar Salad', ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'] }
];

app.use('/', (req, res) => {
    res.render('index', { title: 'Unit 4 Lesson 2', recipes });
});

module.exports = router;