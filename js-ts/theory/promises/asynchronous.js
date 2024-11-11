console.log('asynchronous \n',)


import XMLHttpRequest from 'xhr2';
/*

    Конкурентность - выполнение нескольких задач одновременно
    Параллельность - выполнение нескольких задач одновременно - КЕМ ДРУГИМ
    Многопоточность - способ выполнения конкурентности (если 1 проц - 1 поток)
    Асинхронная операция - передача операций выполнения на сторону

 */

function req(id) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('load', function (){
        const data = JSON.parse(this.responseText)
        console.log('load data', data)
    })


    xhr.open("GET", "https://dummyjson.com/products");

    xhr.send();
}


req('')



