'use strict'

console.log('convertor numbers',)

console.log('Интернализация вывода чисел для каждой страны ',)

const options = {
    style: 'currency',
    currency: 'RUB',
    useGrouping: false // уберутся лишние пробелы
}
const options1 = {
    style: 'currency',
    currency: 'USD'
}

const options2 = {
    style: 'currency',
    currency: 'USD'
}

// для каждой страны свой формат отображения валюты
console.log('RU RUB', new Intl.NumberFormat('ru-RU', options).format(23000))
console.log('RU USD', new Intl.NumberFormat('ru-RU', options1).format(23000))
console.log('EN USD', new Intl.NumberFormat('en-US', options2).format(23000))
console.log('ar-SY', new Intl.NumberFormat('ar-SY', options2).format(23000))

const options4 = {
    style: 'decimal'
}

console.log('RU Дециметры', new Intl.NumberFormat('ru-RU', options4).format(23000))

const options5 = {
    style: 'percent'
}
console.log('RU Проценты', new Intl.NumberFormat('ru-RU', options5).format(0.1))


const options6 = {
    style: 'unit',
    unit: 'celsius'
}
console.log('RU Градусы', new Intl.NumberFormat('ru-RU', options6).format(35))


console.log('Конвертор валют из одной в другую Сумма, исходная и конвертируемая валюта',)

function convert(sum, initialCurrency, convertCurrency) {
    const allCurrencies = [
        {name: 'USD', mult: 1},
        {name: 'RUB', mult: 1 / 96},
        {name: 'EUR', mult: 1.1},
    ]

    const initial = allCurrencies.find(c => c.name === initialCurrency)

    if (!initial) {
        return null
    }

    const convert = allCurrencies.find(c => c.name === convertCurrency)

    if (!convert) {
        return null
    }


    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: convert.name
    }).format(sum * initial.mult / convert.mult)
}

console.log('Конвертор валют руб в доллар',
    convert(10000, 'RUB', 'USD' ))

console.log('Конвертор валют руб в евро',
    convert(10000, 'RUB', 'EUR' ))

console.log('Конвертор валют доллар в руб',
    convert(100, 'USD', 'RUB' ))

console.log('Конвертор валют тенге',
    convert(100, 'TG', 'RUB' ))

