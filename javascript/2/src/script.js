// Array /მასივები 

// var newArr = []
// ------------ 0 ----- 1 ----- 2
// var people = ["Tom", "Alice", "Ben"]

// console.log(people[0])



var numbers = [
    [1,2,3,4,5], 
    [6,7,8,9,10]
]






// for ციკლი

// for(მრიცხველის ინიციალიზაცია; პირობა; მრიცხველის შეცვლა) {
//     პირობა
// }


// var names = ["Tom", "Alice", "Ben"]
// console.log(names.length)
// for (var i = 0; i < names.length; i++){
//     document.write(names[i] + "</br>")
// }
// // for in
// for (var index in names){
//     document.write(names[index])
// }

// While
var people = [
    ["Tom", 25, false],
    ["Alice", 18, true],
    ["Ben", 30, true]
 ]
 

var index = 2

// while(index < people.length){
//     document.write(people[index] + "</br>")
//     index++
// }


const peoples2 = [
    ["Tom", 25, false],
    ["Alice", 18, true],
    ["Ben", 30, true]
]

// peoples2.forEach((item) => {
//     document.write(item + "</br>")
// })

// peoples2.map((item) => {
//     document.write(item + "</br>")
// })


const peoples3 = ["Tom", "Alice", "Ben"]

// reverse peoples3 
var newArr = []
for (var i = peoples3.length - 1; i >= 0; i--){ 
    console.log(peoples3[i])
    newArr.push(peoples3[i])
}
console.log(newArr)

console.log(peoples3.reverse())


// get odd numbers from array

var numbers = [1,2,3,4,5,6,7,8,9,10]

var oddNumbers = []
var evenNumbers = []

for (var i = 0; i< numbers.length; i++){
    if (numbers[i] % 2 != 0){
        oddNumbers.push(numbers[i])
    } else {
        evenNumbers.push(numbers[i])
    }
}
console.log(oddNumbers)
console.log(evenNumbers)


// function ფუნცქციის_სახელი(პარამეტს){
//     ინსტრქუცია
// }

// სტანდარტული ფუნქცია
function display(){
    document.write("Hello World")
}
display()


// ანონიმური ფუნქცია
var secondFunction = function(){
    document.write("Hello World")
}
secondFunction()

// Arrow function / არროვ ფუნქცია / ანონიმური ფუნქცია
const thirdFunction = () => {
    document.write("Hello World")
}


//----------- / test functions /----------/

function sum(x){
    var z = x * x
    console.log(z)
}

sum(5)


function sum2(x, y) {
    if(y === undefined) {
        y = x
    }
    var z = x * y
    console.log(z)
}

sum2(6)


function sum3(){
    var z = 1
    for (var i = 0 ; i<arguments.length; i++){
        z *= arguments[i]
        console.log(z)
    }
}

sum3(6,5,4)


function displayMorning(x, welcomeMessage){
    const message = welcomeMessage(x)
    document.write(message)
}

function welcomeMessage(time) {
    if(time < 12 ){
        return "Good Morning"
    } else {
        return "Good evening"
    }
}

displayMorning(13,welcomeMessage)

// var a 
// let b = 10
// const d = 5 


const x = 5
displaySquare()
function displaySquare() {
    const z = x * x
    console.log(z)
}

displayFunction2()


const displayFunction = function() {
    console.log("Hello Hoisting")
}

displayFunction()

const newArrowFunction = () => {
    
}
newArrowFunction()


function displayFunction2(){
    console.log("Hello second function")
}

export default displayFunction2
