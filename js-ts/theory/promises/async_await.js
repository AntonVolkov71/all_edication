console.log('async await \n',)

import fetch from 'node-fetch';

async function getProduct() {

    try {
        // throw new Error('Error')
        const productsResponse = await fetch('https://dummyjson.com/products31')

        if(productsResponse.status > 400) {
            throw new Error('Error status ' + productsResponse.status)
        }

        const {products} = await productsResponse.json()

        console.log('products',products.length )
        const productResponse =      await fetch('https://dummyjson.com/products/' + products[0].id)

        const product = await productResponse.json()

        return product
    } catch (e) {
        console.error('my error:', e.message)
    } finally {
        console.log('Не ожидали а я есть всегда', )
    }

}

getProduct()
    .then(console.log)
console.log('end',)


ОСТАНОВИЛСЯ на уроке Упражнение МОй город Асинхронный JS