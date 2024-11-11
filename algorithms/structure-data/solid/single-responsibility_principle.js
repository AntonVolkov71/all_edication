console.log('Single-responsibility principle',)

/*
    Solid - принципы, которые лежат в основе дизайна построения приложения в ООП

   S - single-responsibility principle
        - Принцип единственной ответственности
        - выполнять только одно действие

   O - open–closed principle
        - открыты для расширения, но закрыты для изменения

   L - Liskov Substitution Principle
        - функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа,
            не зная об этом.

   I - interface segregation principle
        - Программные сущности не должны зависеть от методов, которые они не используют.
        - огромный интерфейс разделять на мелкие

   D - dependency inversion principle
        - классы должны зависеть от абстракций, а не от конкретных деталей
        - Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
        - Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
 */

const localStorage = {
    storage :{},
    setItem(key, value) {
        this.storage[key] = value
    },
    getItem(key){
        return this.storage[key]
    }
}
class Character {
    #inventory = []
    #health = 10;

    pickItem(item) {
        this.#inventory.push(item)
    }

    receiveDamage(damage) {
        this.#health -= damage
    }

    // лишняя логика
    saveCharacter(){
        localStorage.setItem('char', this)
    }

    // лишняя логика
    loadCharacter(){
        //...
    }
}

class DB {
    // так должно быть
    save(item){
        localStorage.setItem('char', this)

    }
}