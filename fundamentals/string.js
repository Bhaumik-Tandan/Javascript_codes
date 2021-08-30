const txt="0123456789";
console.log(txt.length);

//slice
console.log(txt.slice(2,5));//not inplace prints 234
console.log(txt.slice(-7,5));// -1 is last index
console.log(txt.slice(-5));//prints whole starting form -5

//substring
console.log(txt.slice(8,5));//prints nothing
console.log(txt.substring(8,5));//swaps the arguments and print accordingly
console.log(txt.substring(-1,-3))//prints nothings
console.log(txt.slice(NaN))//treats 0
console.log(txt.substring(NaN))//treats as 0


//substr second argument is the length of the string
console.log(txt.substr(3,4));// 3456
console.log(txt.substr(-7,3));// 345
console.log(txt.substr(-4));

//replace
console.log(txt.replace("23","bc"));
console.log(txt.replace(/45/i, "W3Schools"));//first is regex

//toUpperCase()
//text1.toLowerCase()
//concat


console.log("     efsf     sdf     ".trim());

const str="abc";
console.log(str.padStart(5,"*",));//simpilarly padEnd

console.log(str.charAt(2));
console.log(str.charCodeAt(0));//99
console.log(str.codePointAt(0));//99
console.log(str.charCodeAt(210));//NaN
console.log(str.codePointAt(210));//undefined


