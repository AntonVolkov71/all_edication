console.log('Полиморфизм \n', )

/*
    Ad-hock - возможность по разному исполнять функцию от типа данных
    Параметрический - выполнять одну и тужу функцию но разным типом агрументов
    Полиморфизм подтипов - расширение возможности
 */

console.log('Ad-hock',  2 + 2, "2" + "2") // сложение с разными параметрами

console.log('\n Параметрический', )
console.log(1)
console.log("1")
console.log({a:1} )

console.log('Полиморфизм подтипов\n', )

class Enemy {
    health;

    constructor(health) {
        this.health = health
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        console.log('health', this.health)
    }
}


class Sword {
    #damage;

    constructor(damage) {
        this.#damage = damage
    }

    strike(enemy) {
        if(enemy instanceof Enemy) {
            enemy.receiveDamage(this.#damage)
        }
    }
}


class Orc extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        if(Math.random() > 0.5) {
            this.health = this.health - damage
        }
        console.log('health', this.health)
    }
}

class Troll extends Enemy {

}

const enemy = new Enemy(100);
const orc = new Orc(150)
const troll = new Troll(50)
const sword = new Sword(30)

sword.strike(enemy)
sword.strike(enemy)
sword.strike(orc)
sword.strike(orc)
sword.strike(troll)