console.log("", Number.MAX_SAFE_INTEGER ) // максимальное число которое было
// если прибваить к Number.MAX_SAFE_INTEGER то в коные будут только НУЛИ!!!
// 9007199254740991, 900719925474099112312 = 900719925474099100000

// новый тип данных bigint, может быть и отрицателньным
console.log("number", typeof 10)
console.log("bigint", typeof 10n)
console.log("bigint",  900719925474099112312n) // можно таким пользоваться
console.log("bigint",  900719925474099112312n - 34234n) // но операции только с bigint!!

//console.log(10n - 4 ) // error

console.log("parse", parseInt(10n) - 4) // приведение к одному типу
console.log("parse", 10n - BigInt(4)) // приведение к одному типу


console.log("", 5n / 2n ) // получем 2 , так BigInt - целочисленные типы