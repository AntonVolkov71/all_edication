// для ситуаций мы не знаем прилетит заполненный объект или нет

const bill1 = {
  bank: {
    name: "My bank",
    amount: {
      value: 1000,
      currency: "RUB"
    },
  }
}

const bill2 = {
  bank: {}
}

// не обходимо предусмотреть что возможно не будет данных
function getBillValueFrom(bill) {
  // жесть проверять каждое поле
  // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
  //     ? bill.bank.amount.value
  //     : undefined

  return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1))
console.log(getBillValueFrom(bill2))

// Для HTML также работает
// document.querySelector("h2")?.innerText
