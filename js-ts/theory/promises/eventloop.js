console.log('eventloop \n',)

console.log('1',)


setTimeout(() => {
    console.log(2)
}, 0)

Promise.resolve(3)
    .then(res => {

        console.log(res)

        for (let i = 0; i < 1000000000; i++) {
            // блокирует setTimout!!!!!!!!!!
        }
    })

console.log('4',)

// 1, 4, 3, 2 - Promise - MicroTask

