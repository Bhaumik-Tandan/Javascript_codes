
//array
var a=[ 234 , "sfdsdf" ]//arrays are like list in python
a.push(324);//push at the end and return the length of the array
console.log(a);
b=a.pop();//pop from the end
console.log(a,b);
c=a.shift()//removes the first element
console.log(a,c);
c=a.unshift("sdffs")//removes the first elemnt and return the length of the array
console.log(a,c);




const e=[1,2,3,4];
let d;
d=[...e];//unpack
console.log(d);

//array elemrnts
const [a1,a2,a3,,,a6]=[1,2,3,4,5,6,7,8,9];
console.log(a1,a2,a3,a6);