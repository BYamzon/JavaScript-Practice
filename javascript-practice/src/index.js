import "./styles.css";

//write code for following steps
let cart = ["lettuce", "rice", "bread", "chocolate"]; //create an array named cart with 4 grocery items.
cart[4] = "tomato"; //add 5th item to the cart array
let cart1 = []; //create an empty array named cart1
cart1 = cart; //set cart1 to cart
console.log(cart1[3]) + console.log(cart[3]); //print 4th elment of cart1 and cart using console.log()

//what is the answer to following questions and why?

("235"); //console.log("2" + 3 + 5);
//there is combination of string and number data types. "2", a string data type, is the first variable within the statement, so that takes precedence over the numbers. It concates 3 and 5 together to create "235".

("55"); // console.log(2 + 3 + "5");
//another combination of number and string data types. number data types appear first so 2 + 3 = 5. the following "5" is a string, so that groups the number 5 data type within the string data to concate into "55"

false; //console.log( 2 === 3)
//this statement uses the identity operator and compares the two given values, 2 and 3. they are not the same when the script runs, it prints "false"

false; // console.log([1,2,3] === [1,2,3])
//this statement does not know where to point its reference to for both arrays
