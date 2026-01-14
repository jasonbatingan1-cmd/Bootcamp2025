// Temporary in-memory book "database"

let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", tags: ["fiction", "adventure"] },
    { id: 2, title: "1984", author: "George Orwell", tags: ["dystopian", "political"] },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", tags: ["classic", "social issues"] },
];

// Export and allow modification
module.exports = books;