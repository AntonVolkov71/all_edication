'use strict';

console.log('OOP \n',)

console.log('operator create Function',)

const User = function (email, password) {
    this.email = email
    this.password = password + '%%%'

    // Плохой способ определения!!!!!!!
    this.getEmail = function () {
        return this.email
    }
}

const user1 = new User('email', '1232')
const user2 = new User('email4234', 'фвс')

console.log('user1', user1)
console.log('user1 function ', user1.getEmail())
console.log('user1', user2)
console.log('user1 constructor', user1.constructor)

console.log('instanceof new', user1 instanceof User)
// Сначала Создается пустой объект.
// Вызывается функция User.
// this = пустому объекту.
// объект связывается с prototype.
// возвращается объект.


console.log('\n ___Prototype___ \n',)

const Book = function (title, author) {
    this.title = title
    this.author = author

    this.isRead = false
}

Book.prototype.read = function () {
    this.isRead = true
}

Book.prototype.read2 = function () {
    return 'read2 from prototype'
}

Book.prototype.cover = 'Paper'

const lordOffTheRing = new Book('Lord of the ring', 'Tolkin')

console.log('lordOffTheRing', lordOffTheRing)

lordOffTheRing.read()
console.log('lordOffTheRing isRead', lordOffTheRing.isRead)

console.log('\nprototype', lordOffTheRing.__proto__.read2())

console.log('\nПроверка прототипа от созданной сущности', Book.prototype.isPrototypeOf(lordOffTheRing) )
console.log('Проверка прототипа от самого объекта', Book.prototype.isPrototypeOf(Book) )

console.log('\nСвойство через прототип ', lordOffTheRing.cover )
console.log('Свойство через прототип hasOwnerProperty', lordOffTheRing.hasOwnProperty('cover') )

const arr = ['a', 'b', 'c']
const arr2 = []

Array.prototype.first = function (){
    return this[0]
}
console.log('\narr first', arr.first() )
console.log('arr2 first', arr2.first() )

console.log('ЭТА ПЛОХАЯ ПРАКТИКА МЕНЯТЬ ПРОТОТИПЫ ВСТРОЕННЫХ ОБЪЕКТОВ', )

console.log('\n Упражнение \n', )

const product = {id: 1, name: 'Bread', count: 1}

const Cart = function (){
    this.products = []
}

Cart.prototype.addProduct = function (prod) {
    if(this.products.find(el=> el.id === product.id)){
        return
    }

    this.products.push({...prod})
}

Cart.prototype.increaseAmount = function (id) {
    this.products = this.products.map(item=>{
        if(item.id === id) {
            item.count++
        }

        return item
    })

}

Cart.prototype.decreaseAmount = function (id) {
    this.products = this.products.map(item=>{
        if(item.id === id) {
            item.count--
        }

        return item
    })
        .filter(item => item.count > 0)
}


const cart = new Cart()

cart.addProduct(product)
cart.increaseAmount(1)
cart.increaseAmount(1)
cart.increaseAmount(1)
cart.decreaseAmount(1)

const cart2 = new Cart()
cart2.addProduct(product)

console.log('Cart ', cart )
console.log('Cart 2', cart2 )

const Book2 = function (title, author){
    this.author =author
    this.title =title
    this.isRead = false
}

Book2.prototype.changeRead = function (value){
    return this.isRead = value
}

/// new создается новый объект. создает this и связывает объект
const book1 = new Book2('LorOfRings', 'some author')


console.log('hasOwnProperty Book2',Book2.hasOwnProperty('changeRead'))
console.log('hasOwnProperty __proto__ book1',book1.__proto__.hasOwnProperty('changeRead'))
console.log('hasOwnProperty book1',book1.hasOwnProperty('title'))