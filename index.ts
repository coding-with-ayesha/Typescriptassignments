
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temp:number[] = [0, 10, 20, 30, 40]
let ArrList:number[] = temp.map((item:number) => {
    return (item * 9/5) + 32
 })
 console.log("tem arr" , ArrList)

 
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
 let num: string[] = ["apple", "banana", "cherry", "date", "grape"]
let CharList: string[] = num.filter((item: string) => {
    let find: string = item.charAt(5)
    if (find) {
        console.log("list in map", item)
        return item
    }
})


//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let num1: number[] = [1, 2, 3, 4, 6, 16, 9, 32, 9, 64]
let findSqr: number[] = num1.filter((f) => f % 2 != 0).map((item: number) => {
    return item * item 
})

console.log("odd sqrt number", num1)


//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

let num2: number[] = [1, 2, 3, 4, 6, 16, 9, 32, 9, 64]
let findESqr: number[] = num1.filter((f) => f % 2 == 0).map((item: number) => {
    return item * item 
})

console.log("even sqrt number", num1)



//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let Names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"]
let IncludedName: string[] = Names.map((item: string) => {
    // let addEx: string = `${item}!` 
    return `${item}!`
})

console.log("new RR", IncludedName)













