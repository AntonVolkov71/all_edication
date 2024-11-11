'use strict'

console.log('Classes \n',)

const Book = function (title, author) {
    this.author = author
    this.title = title
    this.isRead = false
}


Book.prototype.changeRead = function (value) {
    return this.isRead = value
}

Object.prototype.toString = function () {
    throw new Error('Make toString')
}

class BookClass {
    isRead = false

    constructor(title, author) {
        this.author = author
        this.title = title
    }

    toString() {
        return BookClass.name
    }

    changeRead = (value) => {
        this.isRead = value
        return this.isRead
    }
}

// можно и так
// const BookClass = class {}

const book = new BookClass('lord', 'tolkin')

console.log('book method ', book.toString())
console.log('book  __proto__', book.__proto__.toString())
console.log('НЕИЗМЕНЯЕТ ОБЪЕКТ book  __proto__', book.changeRead(true))
console.log('book isread', book.isRead)
console.log('book', book)
console.log('instance Book', book instanceof BookClass)
console.log('has own property ', book.hasOwnProperty('changeRead') )

