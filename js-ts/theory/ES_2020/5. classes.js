class Person {
  static type = "Human" // доступен без инстансас класса
  static #area= "EARTH"
  name = "unknown name" // вместо this.name

  #year = 1990 // приватные переменные
  constructor(name) {
    this.name = name
  }


  static printArea(){ // геттер для статика
    return Person.#area === "EARTH" ? "Земля" : "Марс"
  }

  get age() {
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age
    }
  }
}

const person = new Person("Anton")

