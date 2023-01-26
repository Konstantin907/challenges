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
let counter = 0
function q7() {
    while( counter < 10 ) {
        console.log(counter)
        counter++
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


