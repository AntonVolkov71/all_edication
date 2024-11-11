const values = {
  undefined: undefined,
  null: null,
  false: false,
  zero: 0,
  empty: ""
}

// суть если значение фалсе, то устанавливаем дефолтное значение
console.log("||", values.undefined || "default undefined") // старый метод
console.log("??", values.undefined ?? "default undefined") //новый метод

console.log("||", values.null || "default null") // старый метод
console.log("??", values.null ?? "default null") //новый метод

// false, 0 , "" - при || будет нормальное фолсное значение и пройдет как false а не дефолтное
// ?? задает значение false, 0 , "" - как значение не счатия ошибкой как null
console.log("||", values.false || "default false") //новый метод
console.log("??", values.false ?? "default false") //новый метод

console.log("||", values.zero || "default zero") //новый метод
console.log("??", values.zero ?? "default zero") //новый метод

console.log("||", values.empty || "default empty") //новый метод
console.log("??", values.empty ?? "default empty") //новый метод