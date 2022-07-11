// Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// Frage-1 : Addition. Write a program to add up the numbers 1 to 20.

let frage1 = 0;

for(let i = 1; i <= 20; i++) {

    frage1 += i // frage1 = frage1 + i;
};

console.log("Frage-1 : " + frage1);


//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-2 : There are i bottles of beer on the wall. Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.

for(let i = 1; i <= 5; i++) {

    if(i === 1){
        console.log("Frage-2 : " + "There is 1 bottle of beer on the wall");
    } else {
        console.log("Frage-2 : " + `There are ${i} bottles of beer on the wall`);
    }
};

//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-3 : The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(let i=0; i<=20; i++){
if (i%2 === 0){
    console.log("Frage-3 : " + i + " ist gerade");
} else {
    console.log("Frage-3 : " + i + " ist ungerade");
}
};


//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-4 : Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


let frage4 = 1;
for(let i=0; i<10; i++) {
    frage4 *= 9;
    console.log("Frage-4 : " + frage4);
};


//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-5 : Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


for(let i=1; i<101; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("Frage-5 : " + i + " FizzBuzz");
    } else if (i%3 === 0){
        console.log("Frage-5 : " + i + " Fizz");
    } else if (i%5 ===0) {
        console.log("Frage-5 : " + i + " Buzz");
    } else {console.log ("Frage-5 : " + i)}
};


//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-6 : Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

let frage6 = 0;
for(i=1; i<1001; i++){
    if (i%3 === 0 || i%5 === 0){
        frage6 += i // frage1 = frage1 + i;
    };  
}; console.log("Frage-6 : " + frage6);


//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-7 : Write programs that produce the following outputs:





//////////////////////////////////////
console.log("//////////////////////////////")
// Frage-8 : isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

