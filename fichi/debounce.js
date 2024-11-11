function debounce(callback, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) {
            return;
        }

        console.log('argement',arguments )

        callback.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };

}

function forDebounce(){
    console.log('her', new Date().toTimeString());
}

const startDebounce=()=>{
    const tt = debounce(forDebounce, 1000)

    setInterval(()=>{
        tt()
    },500)
}

export default startDebounce
