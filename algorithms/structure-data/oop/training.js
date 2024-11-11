console.log('training \n',)
const  crypto = require('node:crypto');
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
        enemy.receiveDamage(this.#damage)
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

const enemy = new Enemy(100);
const orc = new Orc(150)
const sword = new Sword(30)

sword.strike(enemy)
sword.strike(enemy)
sword.strike(orc)
sword.strike(orc)
sword.strike(orc)

console.log('math', Math.floor(Math.random() * (5 - 2 + 1) + 2))
console.log('crypto', crypto.randomUUID())
