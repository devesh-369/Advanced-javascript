console.log("today we will be learning the funtions in js")
//let create a function to get the sum of two numbers
function sum(x,y){
    console.log(x+y);
    s = x+y;
    return s;
}
let val =sum (44,56);
console.log(val);
// we will learn about how we cn create more functions
//multiply function
function mul(x,y){
    console.log(x*y);
    
}
mul(9,6)
//arrow function which is mostly use in modern js
const arrowsum=(a,b)=>{
    console.log(9,6);
};
arrowsum();
//practice question 
//create a function using  the " function "keyword that take a string as an arguments andreturns the no of vowels in the string
function countVowels(str){
    let count = 0;
    for (const char of str){
        if (char  === "a" ||
            char  === "e" ||
            char  === "i" ||
            char  === "o" ||
            char  === "u")
        {
            console.log(char);
            count++;
        }


    }
    console.log(count)
}
countVowels("Devesh Pathak Skill up");
