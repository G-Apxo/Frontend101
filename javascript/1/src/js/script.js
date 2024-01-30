// alert("Hello world!")

// console.log("Hello world!")

// document.write("Hello world!")

// alert("Hello world! 1")
// alert("Hello world! 2")
// alert("Hello world! 3")


// Variables : ცვლადები  var / let / const

// alert("გამოსახულების გამოთვლა")

// var a 

// var b = 5

// var c = 6

// a = b + c

// alert(a)


// primitive data types / პრიმიტირული მონაცემთა ტიპები

// string : წარმოადგენს სტრიქონს (ტექსტს)

// number : წარმოადგენს რიცხვით მნიშვნელობას

// boolean : წარმოადგენს ლოგიკური მნიშვნელობა true ან false

// undefined : მიუთიტებშ  რომ მნიშვნელობა არ აქვს მინიჭებული

// null : მითუთებს განუსაზღვრელ მნიშვნელობას 


// var name = "Giorgi" // string

// var someNumber = 10 // number

// var logic = true // boolean

// var a // undefined არ აქვს მინიჭებული მნიშვენლობა


// var isAlive = null // null როცა გვაქვს განუსაზღვრელი მნიშვნელობა 


// var someNumberNew = 10

// var someNumbers = "10"

// var sum = someNumberNew + someNumbers

// console.log(10 + 10 + "10" + 10) // 201010 

// console.log(typeof someNumberNew) 

// console.log(typeof someNumbers)

// console.log(typeof sum)

// მათემატიკური ოპერაციები

// var x = 41 
// x ++
// var y = x % 7

// console.log(x)


// პრეფიქსული ინკრიმეტნი // ჯერ ზრდის ცვლადს და მერე აბრუნებს მნიშვნელობას
// var x = 5
// var z = ++ x

// console.log(x)
// console.log(z)

// // პოსტფიქსური იკრიმენტი // ჯერ აბრუნებს მნიშვნელობას და მერე ცვლადს

// var a = 5 
// var b = a ++

// console.log(a)
// console.log(b)



// var income = 100 
// var percent = 10
// var strIncome = "100"

// var result1 = income == strIncome // ადარებს ორ მნიშვნელობას ისნი ტოლია თუ არა

// console.log(result1) // true

// var result2 = income === strIncome // იგივეობა რაც ადარებს როგორც მნიშვნელობას ასევე მონეცამეთა ტიპებსაც

// console.log(result2) // false


// var result = income > 50 && percent < 12 // && და კავშირი არის როგორც პიველი ასევე მეორე თუ სწორი მაშინ დააბრუნებს tures

// console.log(result) // true

// result = income > 50 || percent > 20 // ერთ ერთი მაინც უნდა იყოს სწორი
// console.log(result) // true


// var name = "Tom"
// var latName = "Jonson"

// var fullName = name + " " + latName

// console.log(fullName)




// var sum = 500 //ანაბარის თანხა
// var percent = 10 // პროცენტი ანაბარზე

// var income = sum * percent / 100 // შემოსავალი ანაბრის მიხედვით

// sum = sum + income // განვსაზღვროთ ახალი თანხა

// console.log("შემოსავალი ანაბარზე" + income)

// console.log("ანაბრის თანხა პირველი წლი შემდეგ" + sum)


// var strSum = prompt("შეიყვანეთ ანაბრის თანხა" , 1000)

// var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი" , 10)

// var finalAmount = parseInt(strSum)

// var finalPercent = parseInt(strPercent)

// finalAmount = finalAmount + finalAmount * finalPercent / 100

// alert("პროცენტის დარიცხვის შემდეგ ჩვენი თანხა იქნება" + finalAmount)


// if else operators

// if(პირობა)მოქმედება

// var income = 20 

// if(income > 50) {
//     alert("income is good")
// } else {
//     alert("income is bad")
// }


var income = 1000
var age = 20

if (income > 100 && age < 20) {
    alert("კაი ბიჭი ხარ")
} else if (income > 200 || income < 800 || age > 18) {
    alert("საშუალო შემოსავალი")
} else if (income < 199 && age > 20) {
    alert("წავა რა")
} else {
    alert("test")
}

var a = 1
var b = 2

var result = a < b ? a+b : a-b
console.log(result) //3

if (a < b) {
    a + b
} else {
    a - b
}