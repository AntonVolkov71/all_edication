console.log('inheritance ES6 \n')

class Book {
    constructor(title, author) {
        this.author = author
        this.title = title
    }

    buy (){
        console.log('buy' )
    }
}

class AudioBook extends Book {
    constructor(title, author, lenMinute) {
        super(title, author);

        this.lenMinute = lenMinute
    }

    log(){
        console.log('LOG', )
    }
}

const book = new AudioBook('Lord rings', 'talkin', 20 *60)

book.log()
book.buy()

console.log('instance',book instanceof AudioBook)
console.log('instance',book instanceof Book)