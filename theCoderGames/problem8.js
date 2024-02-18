let list = new Array(6).fill(undefined)         // An array of 6 elements, each one set to undefined for now.

for (let i = 0; i < list.length; i++) {
    list[i] = i % 2 == 0 ? 1 : 0                // ternary operator
}
console.log(list)