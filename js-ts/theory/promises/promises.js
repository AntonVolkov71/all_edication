console.log('Promises \n',)
import XMLHttpRequest from 'xhr2';

/*
    Чтобы одна часть не мешала другой РАСКОМЕТИРУЙ НУЖНУЮ
*/


// import fetch from 'node-fetch';
//
// const res = fetch("https://dummyjson.com/products/1")
// console.log('RES  pending', res)
//
// const response = res
//     .then(res => res.json())
//     .then(data => {
//         console.log('data', data)
//     })
//
//
// console.log('response promise pending ', response)
//
//
// fetch("https://dummyjson.com/products")
//     .then(res => res.json())
//     .then(({products}) => fetch("https://dummyjson.com/products/" + products[0].id))
//     .then(res => res.json())
//     .then(data => console.log('then data ', data))
//
//
// console.log('\n локальная обработка ошибок - reject \n',)
// fetch("https://dummyjswon.com/products")
//     .then(res => res.json(), error => console.log('error', error)) // далее ошибка не пройдет
//     .catch(e => console.log(e))
//
// console.log('\n используем глобальную обработку Reject\n',)
// fetch("https://dummyjswon.com/products")
//     .then(res => res.json(),)
//     .catch(e => console.log(e)) // всегда в конце цепочки
//
//
// console.log('\n Finaly \n',)
// fetch("https://dummyjson2.com/products")
//     .then(res => res.json(),)
//     .catch(e => console.log(e))
//     .finally(() => {
//         console.log('в любом случае ошибка или успех'.toUpperCase())
//     })
//
//
//     console.log('\n Ручное создание ошибок \n',)
//
//     function getData(url, errorMessage) {
//         return fetch(url)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error(`${errorMessage} ${res.status}`)
//                 }
//
//                 return res.json()
//             })
//     }
//
//
//     getData("https://dummyjson.com/products2", 'Can not get products')
//         .then(({products}) => {
//                 console.log('products', products)
//                 return getData("https://dummyjson.com/products/" + products[0].id, 'Can not get product')
//             }
//         )
//         .then(data => console.log('data', data))
//         .catch(e => console.log(e.message))
//
//
//
//     console.log('\n Create Promise\n', )
//
//     const prom = new Promise((resolve, reject)=>{
//         if(new Date() < new Date('01/01/24')){
//             reject(new Error('Error date'))
//         }
//
//         resolve('Succes')
//     })
//
//     prom
//         .then(console.log)
//         .catch(console.log)
//
//
//     function timeout(sec) {
//         return new Promise((res)=>{
//             setTimeout(()=>{
//                 res()
//             }, sec * 1000)
//         })
//     }
//
//
//     timeout(1)
//         .then(()=> {
//             console.log('timeout 1')
//
//             return timeout(1)
//         })
//         .then(()=> {
//             console.log('timeout 2')
//
//             return timeout(1)
//         })
//

// console.log('\n Static methods \n',)
//
// /* !!!!
//     constructor - вызывается синхронно так как в этом момент создается promise
//     Instant
//     Timer
// */
//
// Promise.resolve('Instant')
//     .then(data => console.log(data))
//
//
// const prom = new Promise((res)=>{
//     console.log('constructor', )
//
//     // for (let i = 0; i <1e9 ; i++) {
//     // }
//
//     setTimeout(()=>{
//         res('Timer') // будет обработан после всех промисов
//     }, 0)
// })
//
// prom
//     .then(data => console.log(data))
//
// Promise.reject(new Error('Error')).catch(console.log)
// Promise.resolve('Instant 2')
//     .then(data => console.log(data))

console.log('Упражнение обернуть XMLHttpRequest \n', )

function myFetch(url) {
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.send()

        request.addEventListener('load', function (){
            console.log('this.status > 400', this.status > 400)
            if(this.status > 400){
                reject(new Error(this.status))
            }
            resolve(this.responseText)
        })

        request.addEventListener('error', function (){
            reject(new Error(this.status))
        })

        request.addEventListener('timeout', function (){
            reject(new Error('Timeout'))
        })
    })
}

myFetch('https://dummyjson.com/productws')
    .then(data => console.log(data))
    .catch(console.log)
    .then(()=> console.log('aaaaaaaa'))


