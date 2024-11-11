console.log('Private methods \n',)

class Car {
    #vin = 'vinNumber'
    publicField = 'public'

    constructor() {
        console.log('Нельзя удалить, создать приватное свойство',)

        // delete this.#vin !!!!!НЕльзя удалить приватное свойство
        // this.#test = 5  must be declared in an enclosing class НЕЛЬЗЯ!!!
        this.test = 6 // так можно, но не приватноеы
    }

    static #staticPrivate = 'staticPrivate'

    #changeVin(newVal) {
        console.log('changeVin',)
        this.#vin = newVal
    }

    testPrivateMethod(val) {
        this.#changeVin(val)
    }

    static {
        this.#staticPrivate = 'eptat'
    }

    static get staticPrivate() {
        return this.#staticPrivate
    }

}

const car = new Car()

console.log('private не доступен', car.vin)
console.log('обычный доступен', car.publicField)
console.log(' доступен к методу', car.testPrivateMethod())

try {
    const tt =
        console.log('getter static:', Car.staticPrivate)
} catch (e) {
    console.log('error', e.message)
}

console.log('\n УПРАЖНЕНИЕ \n',)

class User {
    #login;
    #_password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password
    }

    set #password(password) {
        this.#_password = password.split('').reverse().join('')
    }

    get #password() {
        return this.#_password.split('').reverse().join('')
    }

    get login() {
        return this.#login
    }

    checkPassword(password) {
        console.log('this.#password', this.#password)
        return this.#password === password
    }

    changePassword(oldPassword, newPassword) {
        if (!this.checkPassword(oldPassword)) {
            return false
        }

        this.#password = newPassword

        return true
    }
}

const user = new User('anton', 'pass')

console.log('user', user)
console.log('user login', user.login)
console.log('user check pass', user.checkPassword('passnew'))
user.changePassword('pass', 'passnew')
console.log('user check pass', user.checkPassword('passnew'))

user.login = 'ne anton'
console.log('user login', user.login)
