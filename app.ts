// 1. Write a ts program to find maximum between two numbers.
// var num1: string | null = prompt("write first number");
// var num2: string | null = prompt("write second number");

// if (num1 != null && num2 != null && num1 > num2) {
//   console.log(num1, " (number 1) is greater then (num2)", num2);
// } else {
//   console.log(num2, " (number 2) is greater then (num1) ", num1);
// }

//2. Write a ts program to find maximum between three numbers.

// var num1: string | null = prompt("write first number");
// var num2: string | null = prompt("wite second number");
// var num3:string  | null = prompt("write third number"); // its not working fine if the values are under 10.

// var newNumber1 = Number(num1);
// var newNumber2 = Number(num2);
// var newNumber3 = Number(num3);

// if(newNumber1 > newNumber2 && newNumber1 > newNumber3){
//     console.log(newNumber1, "(number 1) is greater then (number 2)", newNumber2 ,"and (num3)", newNumber3);

// }
// else if (newNumber2 > newNumber1 && newNumber2 > newNumber3){
//     console.log(newNumber2,"(number 2) is greater then (number 1) ", newNumber1 , "and (num3)", newNumber3 );

// }
// else{
//     console.log(newNumber3, "(number 3) is greater then num1 one and number num2");

// }

//3. Write a ts program to check whether a number is negative, positive or zero.

// var num1: string | null = prompt("write first number");
// var newnumber = Number(num1);

// if(newnumber > 0 ){
//     console.log("number is positive");

// }
// else if(num1 != null && newnumber < 0){
//     console.log("number is negative");

// }
// else{
//     console.log("number is zero");

// }

//4. Write a ts program to check whether a number is divisible by 5 and 11 or not.

// var numToCheck: string | null = prompt("write a number");
// var num1: number = 5;
// var num2:number = 11;
// var num3 = Number(numToCheck);

// if (num3 % 5 ==0 ) {
//     console.log("This Number is Divisable by 5");

// } else if(num3 % 11 ==0){
//     console.log("This number is Divisable by 11");

// }

// else {
//     console.log("Number is not Divisable by 11 or 5");

// }

//5. Write a ts program to check whether a number is even or odd.

// var numToCheck: null | string = prompt("Write a number to check if it is Even or Odd");

// var num1 = Number(numToCheck);

// if (num1 %2 == 0) {
//     console.log("This is Even number");

// } else {
//     console.log("this is odd number");

// }
//6. Write a ts program to check whether a year is leap year or not
// var monthToCheck: null | string  = prompt("Write a month to check if its leap year or not");
// var month =

// if (monthToCheck %4 ==0) {

// } else {

// }
//7. Write a ts program to check whether a character is alphabet or not.

// var letterToCheck: any= prompt("Write a letter");
// //var letter = Number(letterToCheck);

// if (letterToCheck/letterToCheck == 1 ) {
//     console.log("its a number");

// } else {
//     console.log("its an alphabet");
// }
//Write a ts program to input any alphabet and check whether it is vowel or consonant.

// var letterToCheck: any= prompt("Write a letter");
// var vovel1 = [letterToCheck];

// if (vovel1[0] == "a" || vovel1[1] == "e" || vovel1[2] == "i"|| vovel1[3] == "o" || vovel1[4] == "u" ) {
//     console.log("its a vovel");

// } else {
//     console.log("its a constnant ");

// }
//9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
// var lettertocheck: null | string  = prompt("Write a character");
//   //var specialChars = [`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~];

//   var num1 = Number(lettertocheck);
//   var alp =[lettertocheck];

//   if (num1/num1 == 1) {
//     console.log("its a number");

//   } else if (num1/num1 == null) {
//     console.log("its an error");

//   } else {
//     console.log("special character ");

//   }
//10. Write a ts program to check whether a character is uppercase or lowercase alphabet.

// var lettertocheck: any  = prompt("Write a character");
// if ( lettertocheck == lettertocheck.toUpperCase())
//     {console.log("its upper   case");

// } else {
//     console.log("its lower case");

// }
//11. Write a ts program to input week number and print week day.
// var lettertocheck: any = prompt("Write a character");

// if (lettertocheck == 1) {
//   console.log("its sat");
// } else if (lettertocheck == 2) {
//   console.log("its sun");
// } else if (lettertocheck == 3) {
//   console.log("its mon");
// } else if (lettertocheck == 4) {
//   console.log("its tue");
// } else if (lettertocheck == 5) {
//   console.log("its wed");
// } else if (lettertocheck == 6) {
//   console.log("its thr");
// } else {
//   console.log("its friday");
// }

//12. Write a ts program to input month number and print number of days in that month.

// var monthName: any = prompt("Write a character");

// if (monthName == "1") {
//   console.log("it has 31 days");
// } else if (monthName == "2") {
//   console.log("its has 29 days");
// } else if (monthName == "3") {
//   console.log("its has 31 days");
// } else if (monthName == "4") {
//   console.log("its has 30 days");
// } else if (monthName == "5") {
//   console.log("its has 31 days");
// } else if (monthName == "6") {
//   console.log("its has 30 days");
// } else if (monthName == "7") {
//   console.log("its has 31 days");
// } else if (monthName == "8") {
//   console.log("its has 30 days");
// } else if (monthName == "9") {
//   console.log("its has 31 days");
// } else if (monthName == "10") {
//   console.log("its has 30 days");
// } else if (monthName == "11") {
//   console.log("its has 31 days");
// } else if (monthName == "12") {
//   console.log("its has 30 days");
// } else {
//   console.log("PLease enter a valid month number");
// }

//13. Write a ts program to count total number of notes in given amount.
// var valueNumber: null | string = prompt("Write a number of value");
// var value1 = Number(valueNumber);

// if (value1 <= 500) {
//     console.log("you will get", Math.floor(value1/500),"note of 500");
//     console.log("you will get", Math.floor(value1%500/100),"note of 100");
//     console.log("you will get", Math.floor(value1%100/50),"note of 50");
//     console.log("you will get", Math.floor(value1%50/20),"note of 20");
//     console.log("you will get", Math.floor(value1%20/10),"note of 10");

// } else {
//     console.log("dsds");

// }

//14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.

// var input1: null | string = prompt("What is the First angle");
// var iput1 = Number(input1);
// var input2: null | string = prompt("What is the Second angle");
// var iput2 = Number(input2);
// var input3: null | string = prompt("What is the Third angle");
// var iput3 = Number(input3)

// if (iput1 + iput2 + iput3 == 180) {
//     console.log("its a Valid triangle");
// } else {
//     console.log("its an invalid triangle");

// }

//15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.

//16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var input1: null | string = prompt("What is the First angle");
// var iput1 = Number(input1);
// var input2: null | string = prompt("What is the Second angle");
// var iput2 = Number(input2);
// var input3: null | string = prompt("What is the Third angle");
// var iput3 = Number(input3)

// if (iput1 ==60 && iput2 == 60 && iput3 == 60 ) {
//     console.log("its an equilateral triangle");

// } else if (iput1 == iput2 || iput1 == iput3 && iput1+iput2+iput3 == 180) {
//     console.log("its an isosceles triangle");

// } else if (iput1+iput2+iput3 == 180) {
//     console.log("its a scalene triangle");

// } else {
//     console.log("enter a valid number");

// }
//17. Write a ts program to find all roots of a quadratic equation.

//18. Write a ts program to calculate profit or loss.

// var totalamount: null | string = prompt("What is the total cost");
// var iput1 = Number(totalamount);
// var totalcost: null | string = prompt("What is total expense");
//  var iput2 = Number(totalcost);

// if (iput1 < iput2) {
//     console.log("your loss is ", iput2-iput1);

// } else if (iput1 > iput2) {
//     console.log("your profit is", iput1-iput2);

// } else {
//     console.log("enter a valid number");

// }
//19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var NumberinPhysics: null | string = prompt("Please write marks in Physics");
// var physics = Number(NumberinPhysics);
// var NumberinChemistry: null | string = prompt("Please write marks in Chemistry");
// var Chemistry = Number(NumberinChemistry);
// var NumberinBiology: null | string = prompt("Please write marks in Biology");
// var Biology = Number(NumberinBiology);
// var NumberinMathematics: null | string = prompt("Please write marks in Mathematics");
// var Mathematics = Number(NumberinMathematics);
// var NumberinComputer: null | string = prompt("Please write marks in Computer");
// var Computer = Number(NumberinComputer);
// var totalNumberobtained =
//   physics + Chemistry + Biology + Mathematics + Computer;
// var totalNumber = 500;
// var totalPercentage = (totalNumberobtained / totalNumber) * 100;

// if (totalPercentage >= 90) {
//   console.log("you Got A Grade");
// } else if (totalPercentage >= 80) {
//   console.log("You got Grade B");
// } else if (totalPercentage >= 70) {
//   console.log("you got Grade C");
// } else if (totalPercentage >= 60) {
//   console.log("you got grade D");
// } else if (totalPercentage >= 40) {
//   console.log("you Got grade grade E");
// } else if (totalPercentage <= 40) {
//   console.log("Fail, You got grade F");
// } else {
//   console.log("Enter valid number");
// }
//20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var BasicSalary: null | string = prompt("Please write your BAsic Salary");
// var bSalary = Number(BasicSalary);

// var grossSalary10 = bSalary + (bSalary * 20 /100 + bSalary * 80 /100);
// var grossSalary20 = bSalary + (bSalary * 25 /100 + bSalary * 90 /100);
// var grossSalary20orMore =bSalary + (bSalary * 30 /100 + bSalary * 95 /100);

// if (bSalary <= 10000) {
//     console.log("your gross salary is", grossSalary10);

// } else if (bSalary <= 20000) {
//     console.log("your gross salary is ", grossSalary20);

// }
// else if (bSalary > 20000) {
//     console.log("your gross salary is ",grossSalary20orMore );

// }
// else{
//     console.log("enter a valid number");

// }
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// var totalUnits: null | string = prompt("Please write your Total units used");
// var units = Number(totalUnits);
// var units50price = (units * 0.5) * 20 /100
// var unit100price = (units * 0.75) * 20 /100
// var units250price = (units * 1.20) * 20 /100
// var units250plusprice = (units * 1.5) * 20 /100 

// if (units <= 50) {
//     console.log("your total bill is ", units * 0.5 + units50price);
    
    
// }
//     else if (units <= 150) {
//     console.log("your total bill is ", units * 0.75+  unit100price);
    
    
// }
//     else if (units <= 250) {
//     console.log("your total bill is ", units * 1.20 + units250price);
    
    
// }
//     else if (units > 250) {
//     console.log("your total bill is ", units * 1.75 + units250plusprice);
    
    
// }
// else {
//     console.log("please enter a valid number ");
    
    
// }

