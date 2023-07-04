const PI = Math.PI

let First_linear = 4
let Second_linear = 5

let First_linear_squared = Math.pow(First_linear, 2)
let Second_linear_squared = Math.pow(Second_linear, 2)

let Third_linear_squared = First_linear_squared + Second_linear_squared
let Third_linear = Math.sqrt(Third_linear_squared)

let Third_linear_rounded = Math.ceil(Third_linear)

let scale = "cm"

let result = `The lenght of third linear when the first linear is ${First_linear}${scale} and the second linear ${Second_linear}${scale} is ${Third_linear_rounded}${scale}`
console.log(result)

console.log(`The answer is correct because `, Third_linear_rounded == Third_linear_rounded)