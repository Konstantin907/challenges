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

function q2 () {
    let sum = 0
    for(let i = 1 ; i <= 100; i++) {

        if( i % 2 == 0 ) {
            sum = sum + i ;
        }

    }
    console.log(sum)
}

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

let array=[true,false,false,true,false];
let trueValues = array.filter(value => value === true);
console.log(trueValues);

