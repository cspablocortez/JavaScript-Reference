((END=4) => {
    const fibonacci = (n) => {
        return (n == 0 || n == 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2) 
    } 

    const fibArray = []
    for (let i = 0; i <= END; i++) {
        fibArray.push(fibonacci(i))
    }
    console.log(fibArray)
})()