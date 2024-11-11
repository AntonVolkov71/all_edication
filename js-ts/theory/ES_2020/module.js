console.log("i am module.js")

const privatKey = "private"

export const secretKey = 42

export default class Person {
  constructor(name){
    this.name = name
  }
}