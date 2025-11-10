// Class, Constructor and Instance exercise
// ● Create a book class that has constructor and method / function along
// with some properties like book title, pages, author name, published
// year, etc.
// ● Instantiate the book object
// ● Call properties of book class with the object

class book {
    title;
    pages;
    authorName;
    published;
    constructor(title, pages, authorName, published) {
        this.title = title;
        this.pages = pages;
        this.authorName = authorName;
        this.published = published;
    }

    getBookInfo() {
        console.log(`Title: ${this.title} \nAuthor: ${this.authorName} \nPublished: ${this.published}`) //use backticks to use the ${}
    }

    getReadingTime() {
        let hours;
        hours = this.pages / 50;
        console.log(`Reading time for ${this.title} is: ${hours} hours.`);
    }

    getSummary() {
        console.log(`Book Summary: ${this.title} by ${this.authorName}`);
    }
    
}

class bookDetails extends book {
    constructor(title, pages, authorName, published, genre, fiction, available=true) {
        super(title, pages, authorName, published);//in children funtion, need to pass on ALL parent properites when constructing, THEN add new ones
        this.genre = genre;
        this.fiction = fiction;
        this.available = available;
    }

    getBookDetails() {
        console.log(`Book Details: \nTitle: ${this.title} \nGenre: ${this.genre} \nFiction?: ${this.fiction}`)
    }

    toggleAvailability() {
        this.available = !this.available;
        console.log(`Availability for "${this.title}" is now: ${this.available}`);
    }

}

class eBook extends book {
    constructor(title, pages, authorName, published, fileSizeMB, format) {
        super(title, pages, authorName, published);
        this.fileSizeMB = fileSizeMB;
        this.format = format;
    }

    geteBookInfo() {
            console.log(`Title: ${this.title} 
                Author: ${this.authorName} 
                Published: ${this.published}
                File Size: ${this.fileSizeMB} MB
                Format: ${this.format}`);
    }

    getSummary() {
        console.log(`EBook Summary: ${this.title} (${this.format}, ${this.fileSizeMB})`);
    }
}

class audioBook extends book{
    constructor(title, pages, authorName, published, duration, narrator) {
        super(title, pages, authorName, published);
        this.duration = duration;
        this.narrator = narrator;
    }

    getAudioBookInfo() {
        console.log(`Title: ${this.title} 
                Author: ${this.authorName} 
                Published: ${this.published}
                Narrated by: ${this.narrator}`);
    }

    getListeningTime () {
        console.log(`Listening Time: ${this.duration}`);
    }

    getSummary() {
        console.log(`Audiobook Summary: ${this.title}, narrated by ${this.narrator}`);
    }
}

let book1 = new book(
    'Eragon',
    509,
    'Christopher Paolini',
    2002,
    'Fantasy',
    true
    )

let book2 = new bookDetails(
    'Eldest',
    694,
    'Christopher Paolini',
    2005,
    'Fantasy',
    true
    )

let book3 = new eBook(
    'Brinsingr',
    831,
    'Christopher Paolini',
    2002,
    3,
    '.pdf'
)

let book4 = new audioBook(
    'Inheritance',
    860,
    'Christopher Paolini',
    2002,
    '16 hrs and 22mins',
    'Gerard Doyle'
)

let library = [book1, book2, book3, book4];

const longestBook = 
    library
        .reduce((longest, current) => {
    // compare something here
            if (current.pages > longest.pages) { //make sure to use .pages (to look at a property) when comparing
                // current one wins
                return current;
            } else {
                // keep the existing one
                return longest;
            }
            // return whichever book should "win" this round
        }, library[0]);/* initial value here. this will grab the first book in the library array */

console.log(longestBook);

let fictionBooks = 
    library
        .filter((book) => {
            bookDetails.fiction === true
        });
console.log(fictionBooks);
    // book1.getBookInfo(); //when calling functions, always end with "()"
    // book1.getReadingTime();
    // book2.getBookInfo();
    // book2.getBookDetails();
    // book2.getReadingTime();
    // book2.toggleAvailability();
    // book2.toggleAvailability();
    // book3.geteBookInfo();
    // book4.getAudioBookInfo();
    // book4.getListeningTime();
    // library.forEach((book) => book.getBookInfo());
    // library.forEach((book) => book.getSummary());