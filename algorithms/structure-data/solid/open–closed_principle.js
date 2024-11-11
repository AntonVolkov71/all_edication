console.log('open–closed principle',)

/*
    Открыт для чтения, но закрыт для модификации
 */

{
    console.log('ПЛОХО \n',)

    class Treasure {
    }

    class Coin extends Treasure {
    }

    class Crystal extends Treasure {
    }

    class Brilliant extends Treasure {
    }

    class Inventory {
        #score;

        pick(treasure) {
            if (treasure instanceof Coin) {
                this.#score += 1
            }

            if (treasure instanceof Crystal) {
                this.#score += 10
            }

            // заебешься добавлять Brilliant
        }

        // тоже херово
        pickCoin() {
        }

        pickCrystal() {
        }
    }

    console.log('Плохо закончилось \n',)
}

{
    console.log('Теперь по кайфу \n',)

    class Treasure {
        value=0
    }

    class Coin extends Treasure {
        value=1

    }

    class Crystal extends Treasure {
        value=20
    }

    class Brilliant extends Treasure {
        value=30
    }

    class Inventory {
        #score;

        pick(treasure) {
            this.#score += treasure.value
        }

    }
}
