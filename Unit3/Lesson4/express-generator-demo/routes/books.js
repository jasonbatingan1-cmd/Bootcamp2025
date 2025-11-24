const express = require("express");
const router = express.Router();

let books = require("../data/books");

// GET all books
router.get("/", (req, res) => {
    res.json(books);
});


// GET one book by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
});

// CREATE a new book
router.post("/", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// UPDATE a book
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    const { title, author } = req.body;

    book.title = title ?? book.title;
    book.author = author ?? book.author;

    res.json(book);
});

// DELETE a book
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const deleted = books.splice(index, 1);

    res.json({ message: "Book deleted", deleted });
});

module.exports = router;
