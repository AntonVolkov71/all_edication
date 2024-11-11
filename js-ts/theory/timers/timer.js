'use strict';

console.log('1', )

setTimeout((arg, arg1)=>{
    console.log('2', )
    console.log('arg',arg )
    console.log('arg1',arg1 )
    console.log('\n', )
}, 400,'epta', 'epta2')

console.log('3', )

console.log('1 3 2 \n', )

const messages = ['mess1', 'mess2']
const timerNumber = setTimeout(([...args])=>{
    console.log('args', args) // ['mess1', 'mess2']
    console.log('timerNumber', ) // не будет т.к. дальше отменяется
}, 1000,messages)

clearTimeout(timerNumber)

// EVENT LOOP

console.log('\n Event loop', )
console.log('Неточность таймеров', )

const mark1 = performance.now()
console.log('performance now',mark1 )

setTimeout(()=>{
    const mark2 = performance.now()
    console.log('performance now', mark2)
    console.log('Будет чуть больше 1000', mark2 - mark1 )
}, 1000)

console.log('\n Interval', )

const interval = setInterval(()=>{
    console.log('interval', new Date() )
}, 1000)

const timer = setTimeout(()=>{
    console.log('interval', Number(interval))
    clearInterval(interval)
},4000)

console.log('timer', Number(timer))
console.log('interval', Number(interval))


console.log('\n Задачка с таймерами', )

function pizzaTimer(ms) {
    const end = new Date().getTime() + ms;

   const interval = setInterval(()=>{
        console.log(new Intl.DateTimeFormat('ru-RU', {
            minute: 'numeric',
            second: 'numeric'
        }).format(end  + 100 - new Date()) ) // корректировка Eventloop , чтобы не попадать на границу
    }, 1000)

    setTimeout(()=>{
        clearInterval(interval)
        console.log('Пицца готово', )
    }, ms)
}

pizzaTimer(5000)
