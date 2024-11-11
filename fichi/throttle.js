/*
Функция throttle, которая будет выполнять обработчик не чаще одного раза за указанный интервал времени.
У данной функции есть важное и существенное отличие от debounce: если игнорируемый вызов оказался последним, то есть после него до окончания задержки ничего нет — то он выполнится.
Функция будет иметь следующую сигнатуру: throttle(fn, delay, ctx).
Возвращаться должна так же, как и с debounce — функция, которую можно вызвать, где fn будет вызываться не чаще, чем раз в delay миллисекунд с контекстом ctx.
 */


const someCalc = function(a) {
    console.log(a + this.b)
};

function throttle(callback, delay, ctx) {
    let isThrottled = false,
        args,
        context;

    function wrapper() {
        if (isThrottled) {
            args = arguments;
            context = ctx;
            return;
        }
        isThrottled = true;
        callback.apply(ctx, arguments);
        setTimeout(() => {
            isThrottled = false;
            if (args) {
                wrapper.apply(ctx, args);
                args = context = null;
            }
        }, delay);
    }
    return wrapper;
}

let f = throttle(someCalc, 1000, { b: " call" });

const startThrottle=()=>{
        setTimeout(() => f(1), 0); // выполняется немедленно
    setTimeout(() => f(2), 0); // проигнорирован

    setTimeout(() => f(3), 800); // проигнорирован, но потом выполняется
    setTimeout(() => f(4), 1100); // проигнорирован
    setTimeout(() => f(5), 1900); // проигнорирован, но потом выполняется
}

export default startThrottle
