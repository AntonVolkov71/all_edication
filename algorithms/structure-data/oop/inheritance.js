console.log('inheritance \n')

const Book = function (title, author) {
    this.author = author
    this.title = title
}

Book.prototype.buy = function (){
    console.log('buy', )
}

/*
ЕСЛИ ТАК ДЕЛАТЬ ТО БУДЕШЬ ПОВТОРЯТЬСЯ
const AudioBook = function (title, author, lenMinutes) {
    this.author = author
    this.title = title
    this.lenMinutes = lenMinutes
}

Book.prototype.log = function (){
    console.log(' ', )
}
 */


const AudioBook = function (title, author, lenMinutes) {
   Book.call(this, title, author)

    this.lenMinutes = lenMinutes
}

AudioBook.prototype = Object.create(Book.prototype)
AudioBook.prototype.constructor = AudioBook
AudioBook.prototype.log = function () {
    console.log(`${this.title}- ${this.lenMinutes}` )
}

const book = new AudioBook('Lord rings', 'talkin', 20 *60)

book.log()
book.buy()

console.log('instance of ', book instanceof AudioBook)
console.log('instance of ', book instanceof Book)