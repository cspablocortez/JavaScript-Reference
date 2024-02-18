const END = 4

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        // console.log(`Current iteration: ${n - 1} + ${n - 2}`) 
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

const fibArray = []
for (let i = 0; i <= END; i++) {
    fibArray.push(fibonacci(i))
}

console.log(fibArray)

