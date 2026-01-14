const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

console.log(">>> BOOKS ROUTER LOADED FROM:", __filename);


router.use((req, res, next) => {
    console.log("ROUTER HIT:", req.method, req.url);
    next();
});

router.use((req, res, next) => {
    console.log("METHOD:", req.method, "URL:", req.url);
    next();
});

// Display form to edit a book
router.get('/edit/:id', async (req, res) => {
    try {
        console.log(">>> EDIT ROUTE HIT");
        console.log("VIEWS DIR:", req.app.get('views'));
        const book = await Books.findById(req.params.id);
        console.log("EDIT ROUTE LOCALS:", { prefillTitle: book.title, prefillAuthor: book.author, prefillTags: book.tags });
        res.render('form', {
            title: 'Edit a Book',
            prefillTitle: book.title,
            prefillAuthor: book.author,
            prefillTags: book.tags,   // <-- REQUIRED
            action: `/edit/${req.params.id}`,
            book
        });

    } catch (error) {
        console.error('Error fetching book for edit:', error);
    }
});

// Fetch All Books
router.get('/', async (req, res) => {
    res.render('books', { title: 'Book Inventory', books: await Books.find() });
});

//Get form.ejs to add a new book
router.get('/add', (req, res) => {
    res.render('form', {
        title: 'Add a Book',
        action: '/add',
        prefillTitle: '',
        prefillAuthor: '',
        prefillTags: [],
    });
});


// Add a New Book
router.post('/add', async (req, res) => {
    try {
        const tags = req.body.tags.split(',');
        req.body.tags = tags;
        await Books.create(req.body);
        res.render('books', { title: 'Book Inventory', books: await Books.find(), message: 'Book added successfully!' });        
    } catch (error) {
        console.error('Error creating book:', error);
        res.render('form', { title: 'Add a new Book', action: '/add', message: 'Error creating a book!' });
    }
});

// Update a book
router.post('/edit/:id', async (req, res) => {
    try {
        const tags = req.body.tags.split(',')
        req.body.tags = tags
        await Books.updateOne({ _id: req.params.id }, req.body)
        const books = await Books.find()
        res.render('books', { books, message: `Book updated` })
    } catch (error) {
        res.render('form', { title: 'Edit a new book', action: `/edit/${req.params.id}`, message: `Hit an error while updating the book. ${error}` })
    }
});

// Delete a Book
router.delete('/delete/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const toBeDeleted = await Books.findById(bookId);
        if (toBeDeleted) {
            await Books.deleteOne({ _id: bookId });
            res.render('books', { title: 'Book Inventory', books: await Books.find(), message: 'Book deleted successfully!' });
        } else {
            res.render('books', { title: 'Book Inventory', books: await Books.find(), message: 'Book not found. Please try again with other item.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error while deleting the book. Please try again later.', error: err.message });
    }
});

module.exports = router;