console.log('Static methods\n', )

// Для использования класса без создания Инстанса

class Test {
    static a= 1;

    hello(){
        console.log('public method Hello', )
    }

    static helloStatic(){
        console.log('static method Hello', )
    }

    static {
        console.log('Типа конструктор \n', )

        let b = 5
        this.a = b
    }
}

const test = new Test()
test.hello()
Test.helloStatic()

console.log('staic method ',Test.a )

try {
    test.helloStatic()

} catch (e){
    console.error(e.message, '\n')
}

try {
    Test.hello()

} catch (e){
    console.error(e.message, '\n')
}
