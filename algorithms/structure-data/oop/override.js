console.log('Override \n' )

class Book {
    constructor(title, author) {
        this.author = author
        this.title = title
    }

    info(){
        console.log(`${this.title} - ${this.author}` )
    }
}

const book = new Book('lord', 'talkin')
book.info()

class EBook extends Book {
    constructor(title, author, pages) {
        super(title, author);

        this.pages = pages
    }

    info() {
        console.log(`${this.title} - ${this.author} - ${this.pages}` )
    }
}


const book2 = new EBook('lord', 'talkin', 500)
book2.info()
