function q1() {
    for(let i = 1; i <= 100; i++) {
        
        if( (i%3 === 0))
        {
            console.log("Fizz")
        }
        if( i % 5 === 0 ) {
            console.log("Buzz")
        }
        if(  ( i % 3 === 0) && (i % 5 === 0) ) {
            console.log("FizzBuzz")
        }

    }
}
/*Second assigment*/
function q2 () {
    let sum = 0
    for(let i = 1 ; i <= 100; i++) {

        if( i % 2 == 0 ) {
            sum = sum + i ;
        }

    }
    console.log(sum)
}
/*Third assigment*/
var arr = [4, 18, 7, 13, 12]

function q3 (arr) {

    let largest = -Infinity
 
    for (let i = 0; i < arr.length; i++) {
        if( largest < arr[i] ) {
            largest = arr[i]
        }
    }
 
    console.log("Largest number is: "  + largest) 
    
}


q1()
q2()
q3(arr)

// Submission 2.






let practicearray25=[true ,false ,true ,true ,false];
let trueValues = practicearray25.filter(value => value == true);
console.log(trueValues.length);

//Lab 3
/*Q1*/
var x = 10

if(x > 5) {
    console.log ("x is greater than 5")
}else{
    console.log("x is not greater than 5")
}
/*Q2*/

var name = "Popocatepetl";
if (name.length > 5){
    console.log ("The name is longer than 5 characters");
}else {
    console.log("The name is not longer than 5 characters");
}

/*Q3*/
var age = 50;
if (age >=18 && age <= 65) {
    console.log ("You are an adult")
} else {
    console.log ("You are not an adult")
}
/*Q4*/
function multiply (x , y){
    return x * y
}
var result = (4*5)
console.log (result)
/*Q5*/
function greet (name1) {
    return ("Hello") +  " " + name1 + "!"
}
var Gr = greet ("John")
console.log(Gr)
/*Q6*/
let numbers = [ 23, 12, 5, 6, 11, 30 ]
function q6() {
    for( let i = 0 ; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}
/*Q7*/
let numb = 0
function q7() {
    while( numb < 10 ) {
        console.log(numb)
        numb++
        }
        
        }
/*Q8*/
let num = [ 3, 5, 4, 2]
function q8() {
    let sum = 0 
    for(let i = 0 ; i < num.length; i++) {
        sum = sum + num[i]
    }
    console.log(sum)
}
/*Q9*/
let n = [1, 23, 56, 32, 43, 21, 20]
function q9() {
    let i = 0
    let max = -Infinity
    while( i < n.length ){
        if( max < n[i]) {
            max = n[i]
        }
        i++
    }
    console.log(max)
}
/*Q10*/
function reverseString( str ) {
    var newString = ""
    
    for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]
    }
    
    return newString
}
let res = reverseString("hello")
console.log(res)

/*Lab 4*/
//ex1

if ( 10 % 2 === 0 ){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}
// ex2
let musicians = 5

if( musicians <= 0 ) {
    console.log("not a group")
}else if( musicians === 1) {
    console.log("solo")
}else if( musicians === 2) {
    console.log("duet")
}else if( musicians === 3) {
    console.log("trio")
}else if( musicians === 4) {
    console.log("quartet")
}else if( musicians > 4) {
    console.log("this is a large group")
}


//ex3
var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var caseSolved = false;

 if (room === "dining room" && suspect === "Mr. Parkes") {
     weapon = "knife";
     caseSolved = true;
 } else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
     weapon = "poison";
     caseSolved = true;
 } else if (room === "gallery" && suspect === "Ms. Van Cleve") {
     weapon = "trophy";
     caseSolved = true;
 }  else if (room === "billiards room" && suspect === "Mrs. Sparr") {
     weapon = "pool stick";
     caseSolved = true;
 } else {
     console.log("Not solved!");
 }

 if (caseSolved) {
     console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
 }
 //ex4
 let flavor = "vanilla"
let vessel = "cone"
let toppings = "peanuts"

if( (flavor === "vanilla" || flavor === "chocolate") && ( vessel === "cone" || vessel === "bowl" ) && ( toppings === "sprinkles"  || toppings === "peanuts" ) ) {
    console.log( "I'd like two scoops of " + flavor +  " ice cream in a "+ vessel +" with "+ toppings +"." )
}else{
    console.log("------------")
}


//ex6
let eatsPlants = true
let eatsAnimals = true

if( eatsAnimals === true  && eatsPlants === false ) {
    console.log("carnivores")
}else if( eatsAnimals === false  && eatsPlants === true ) {
    console.log("herbivore")
}else if( eatsAnimals === true  && eatsPlants === true ) {
    console.log("omnivore")
}else {
    console.log("undefined")
}

//ex5
var shirtWidth = 25; // size S (small)
var shirtLength = 31; // size M (medium)
var shirtSleeve = 8.88; // size M (medium)

let sW = ""
let sL = ""
let sSl = ""

/// shirtWidth
if( (shirtWidth >= 18 && shirtWidth < 20) && (shirtLength == 28) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    sW = "S"
    sl = "S"
    sSl = "S"
    console.log("S")
}else if((shirtWidth >= 20 && shirtWidth < 22)  && (shirtLength == 29) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    sW = "M"
    sl = "M"
    sSl = "M"
    console.log("M")
}else if( (shirtWidth >= 22 && shirtWidth < 24)  && (shirtLength == 30) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88) ) {
    sW = "L"
    sl = "L"
    sSl = "L"
    console.log("L")
}else if((shirtWidth >= 24 && shirtWidth < 26)  && (shirtLength == 31) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    sW = "XL"
    sl = "XL"
    sSl = "XL"
    console.log("XL")
}else if( (shirtWidth >= 26 && shirtWidth < 28)  && (shirtLength == 33) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    sW = "2XL"
    sl = "2XL"
    sSl = "2XL"
    console.log("2XL")
}else if( (shirtWidth >= 26 && shirtWidth < 28)  && (shirtLength == 34) && (shirtSleeve >= 10.13)) {
    sW = "3XL"
    sl = "3XL"
    sSl = "3XL"
    console.log("3XL")
}else {
    /*sW = ""
    sl = ""
    sSl = ""*/
    console.log("N/A")
}

//ex8
var x = 1;

while (x <= 100) {
    if( x % 3 === 0 ) {
         console.log("Fizz")
    }if( x % 5 === 0 ) {
        console.log("Buzz")
    }if( (x % 3 === 0 && x % 5 === 0) ) {
        console.log("FizzBuzz")
    }if( x % 3 === 0 || x % 5 === 0  ) {
        console.log(x)
    }
    x++
    
}
//ex7
let eudcation = "a Bachelor's degree"
let salary = 0
switch (eudcation) {
    case "no high school diploma":
        salary = "$25,636"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "high school diploma":
        salary = "$35,256"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "an Associate's degree":
        salary = "$41,496"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "a Bachelor's degree":
        salary = "$59,124"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "a Master's degree":
        salary = "69,732"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "a Professional degree":
        salary = "$89,960"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
      break;
    case "a Doctoral degree":
        salary = "$84,396"
        console.log("In 2015, a person with " + eudcation +" earned an average of " + salary.toLocaleString("en-US") + "/year.")
        break;
  }
//ex9
let counter = 60
while( counter >= 0 ) {

    if( counter === 50 ) {
        console.log("Orbiter transfers from ground to internal power")
    }else if(counter === 31) {
        console.log("Ground launch sequencer is go for auto sequence start")
    }else if ( counter === 16) {
        console.log("Activate launch pad sound suppression system")
    }else if( counter === 10 ) {
        console.log("Activate main engine hydrogen burnoff system")
    }else if( counter === 6 ) {
        console.log("Main engine start")
    }else if( counter === 0 ) {
        console.log("Solid rocket booster ignition and liftoff!")
    }else {
        console.log("T-" + counter + " seconds")
    }

    counter--;
}
//ex10
for(let x = 9; x >= 1 ; x--) {
    console.log("hello " + x);
}
//ex11
for( let x = 5 ; x <= 9 ; x++  ) {
    console.log(x)
}
//ex12
for (let k = 0 ;k < 200 ;k++) {
    console.log(k);
  }

  //ex1