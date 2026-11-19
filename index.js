// Assingment 04

// Q 1
// let amount = +prompt("Enter your Shopping Amount");


// if (amount > 10000) {
//     let discountCal = amount * 0.2 
//     let afterDisount = amount  - discountCal 
//     alert(afterDisount)
// } else if (amount > 5000 && amount < 10000) {
//     let discountFor = amount * 0.1
//     let discount = amount - discountFor
//     alert(discount)
// } else {
//     alert("You have to shop more then `5,000` to get Disount")
// }

// Q 2

// let  userunits = +prompt("How many Units did you consumed this Month")
// let first100Units = 10
// let next100Units = 15
// let Units200 = 20

// if(userunits <= 100) {
//     alert(userunits * first100Units)
// } else if (userunits > 100 && userunits < 200){
//     alert(userunits * next100Units)
// } else {
//     alert(userunits * Units200)
// }

// Q 3


// let englishMarks = +prompt("Enter Your English Marks")
// let mathMarks = +prompt("Enter Your Math Marks")
// let computerMarks = +prompt("Enter Your computer Marks")
// let totalMarks = 300
// let obtainedMarks = englishMarks + mathMarks + computerMarks
// let Percentage = (obtainedMarks / totalMarks ) * 100


// if (Percentage >= 90 && Percentage <= 100) {
//     alert("Your Grade is A+")
// } else if (Percentage >= 80 && Percentage <= 90) {
//     alert("Your Grade is A")
     
// }else if (Percentage >= 70 && Percentage <= 80) {
//     alert("Your Grade is B")
     
// }else if (Percentage >= 60 && Percentage <= 70) {
//     alert("Your Grade is C")
     
// }else if (Percentage >= 50 && Percentage <= 60) {
//     alert("Your Grade is A")
     
// } else {
//     alert("Your Grade is Fail")

// }

// Q 4
// let accountBalance = 50000
// let userAmount = prompt("Enter a Amount to Withdraw")
//  if (userAmount > accountBalance) {
//     alert("Insufficient Balance")
// } else if (userAmount <= 0) {
//     alert("Invalid Amount")
// } else if (userAmount > 0 && userAmount < 50000) {
//     alert("Allow Transation")
// } else {
//    alert( "Please enter an Amount in multiples of 500")
// }


// Q 5

// let billAmount = +prompt("Enter Your Bill Amount");
// let menbership = +prompt("Do you have an Membership card \n1 yes \n2 no")
// let cardDiscountCal = billAmount * 0.05
// let cardDiscount = billAmount - cardDiscountCal

// if (billAmount >= 5000 && menbership == 2) {
//     let discountcal = billAmount * 0.15
//     let discount1 = billAmount - discountcal
//     alert(discount1)
// } else if (billAmount >= 5000 && menbership == 1) {
//     let discountcal = billAmount * 0.15
//     let discount2 = billAmount - discountcal 
//     let addition = discount2 + cardDiscount
//     let cardDiscountFinal = addition - billAmount 
    
//     alert(cardDiscountFinal)
// } else {
//     alert("No. Discount for YOU")
// }


// Q 6

// let userage = +prompt("Enter Your Age")
// let Day = prompt("Day to Watch")

// let chlidFee = 300
// let chlidDiscountCal = chlidFee * 0.20
// let chlidDiscount = chlidFee - chlidDiscountCal

// let adultFee = 600
// let adultDiscountCal = adultFee * 0.20
// let adultDiscount = adultFee - adultDiscountCal

// let oldFee = 400
// let oldDiscountCal = oldFee * 0.20
// let oldDiscount = oldFee - oldDiscountCal

// if (userage <= 5 && userage > 0) {
//     alert("You get a free Ticket")
// }
// else if (userage < 12 && Day !== "wednesday" && userage > 0) {
//     alert("Your ticket is " + chlidFee)
   
// } else if (userage < 12 && Day == "wednesday") {
//     alert(chlidDiscount)
// } else if (userage > 12 && userage < 59 && Day !== "wednesday") {
//     alert("Your ticket is " + adultFee)

// } else if (userage > 12 && userage < 59 && Day == "wednesday") {
//     alert("Your ticket is " + adultDiscount)

// } else if ( userage >= 60 && Day !== "wednesday") {
//     alert("Your ticket is " + oldFee)

// } else {
//     alert("Your ticket is " + oldDiscount)

// }

// Q 7 

// let package1 = "Basic"
// let package2 = "Standard"
// let package3 = "Premium"

// let price1 = 300
// let price2 = 600
// let price3 = 1000

// let user = +prompt("How much data do you need \n 1. 5 GB  \n 2. 15 GB  \n 3. 30 GB")

// if (user == 1) {
//      alert("Package Name: Basic \n Data: 5GB \n price is " + price1)
// } else if (user == 2) {
//      alert("Package Name: Standard \n Data: 15GB \n price is " + price2)

// } else if (user == 3) {
//      alert("Package Name: Premium \n Data: 30GB \n price is " + price3)
// } else {
//     alert("No Data available for your Condition ")
// }

// Q 8 
// let userSalary = +prompt("Enter your Salary")
// let useryear = +prompt("Enter your Experience")

// let bonous1cal = userSalary * 0.20
// let bonous1 = userSalary + bonous1cal


// let bonous2cal = userSalary * 0.10
// let bonous2 = userSalary + bonous2cal


// let bonous3cal = userSalary * 0.05
// let bonous3 = userSalary + bonous3cal

// if (userSalary > 30000 && useryear >= 5) {
//     alert("Your Salary is "+ userSalary + " And Bonous you get is " + bonous1cal + " Your Total is " + bonous1)
// } else if (userSalary > 30000 && useryear <= 4 && useryear >= 3) {
//     alert("Your Salary is "+ userSalary + " And Bonous you get is " + bonous2cal + " Your Total is " + bonous2)
// } else if (userSalary >= 30000 && useryear < 3) {
//     alert("Your Salary is "+ userSalary + " And Bonous you get is " + bonous3cal + " Your Total is " + bonous3)
// } else {
//     alert("You get No Discount")
// }

//  Q 9

// let userAmount = +prompt("Enter your order amount")
// let usercity = prompt("Enter you City")
// let discount = 50

// if (userAmount >= 5000) {
//     alert("Free Delivery")
// } else if (userAmount >= 2000 && userAmount <= 5000 && usercity !== "Karachi") {
//     alert("Delivery charges is 150")
// } else if (userAmount >= 2000 && userAmount <= 5000 && usercity == "Karachi") {
//     alert("Delivery charges is 100")
// } else if (userAmount < 2000 && userAmount > 0 && usercity !== "Karachi") {
//     alert("Delivery charges is 250")
// } else{
//     alert("Delivery charges is 200")

// }

// Q 10


// let userAge = +prompt("Enter Your Age")
// let userSalary = +prompt("Enter youe Monthly Salary")
// let userExperience = +prompt("Enter your work Experience")

// if (userAge >= 21 && userSalary > 100000 && userExperience > 2) {
//     alert("You are Eligible for 1,000,000 loan")

// }

// else if (userAge >= 21 && userSalary >= 50000 && userSalary <= 100000 && userExperience >= 2) {
//     alert("You are Eligible for 500,000 loan")
// } else {alert("First Full fill our all condition \n 1.Atleats you have toBE 21 years old \n 2.Your Salary much be Greater then 50000 \n 3. you also have an 2 year work Experience")}

// Q 11
// let userBuy = +prompt("Enter the price of buy")
// let userSell = +prompt("Enter the price of Sell")

// let profit =  userSell - userBuy

// let percentage = (profit / userBuy) * 100

// alert("Your buy amount is " + userBuy + "\n Your Sell price is " + userSell + "\n Your Profit amount is " + profit + "\nPercentagenof your profit is " + percentage + "%")

// Q 12 

// let usermoney = 5000
// let foodExpencesCal = 25 / 100 * 5000
// let transpotExCal = 15 / 100 * 5000
// let additionOfEpxpence = foodExpencesCal + transpotExCal
// let totalExpenxe =  usermoney - additionOfEpxpence 

// alert("Your total buget was " + usermoney + " \n you spend on " + foodExpencesCal + "\n and you spend on treanspot is " + transpotExCal + "\nYour total Expence is " + additionOfEpxpence + "\n Your remaining amount is " + totalExpenxe)

// Q 13 

// let distants = 180
// let time = 3
// let speed = distants / time
// alert("Averge speed is " + speed)

// Q 14 
// let userage = +prompt("Enter your age.")
// let afterAge = userage + 15
// alert("Your current age is " + userage + "\n After 15 years your age will be " + afterAge + "\n I hope you don`t know that")

// Q 15

// let products = 100
// let everyHour = 5
// let afterHour = 7
// let sellProduct = everyHour * afterHour
// let remaining = 100 - sellProduct

// alert("Total product is " + products + "\n Sells is " + sellProduct + "\n Remaining product is " + remaining)

// Q 16 
let userNum = +prompt("Enter a Number")

if (userNum > 0 ) {
    alert("Your Number is Positive")
} else if (userNum < 0) {
    alert("Your Number is Negative")
}else {
    alert("Your NUmber is 0")
}