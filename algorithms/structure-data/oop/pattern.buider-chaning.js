console.log('Pattern Builder Chaining',)

const arr = [1, 2, 3]

console.log('Chaining методов - вызов друг за другом',)
arr
    .map(a => a * 2)
    .filter(a => a < 100)
    .find(a => a < 100)


console.log('\n Builder - возвращение this ', )

class Wallet {
    balance = 0;

    add(sum){
        this.balance +=sum

        return this
    }

    remove(sum){
        this.balance -= sum

        return this
    }
}

const wallet = new Wallet()

const res = wallet
    .add(100)
    .remove(10)
    .add(100)

console.log('res', res)

class Builder {
    house = {}

    addRoof(roof){
        this.house.roof = roof

        return this
    }

    addFloor(floor) {
        this.house.floor = floor

        return this
    }

    execute(){
        return this.house
    }
}

const res2 = new Builder()
    .addFloor('floor')
    .addRoof('roof')
    .execute()

console.log('res2 ', res2)
