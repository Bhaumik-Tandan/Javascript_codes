//function

//variable declared with var have function level scope

function a()
{
    var b=34;
    console.log(b);
}
a();
// console.log(b);//error not defined


//variable without var are global

function c()
{
    d=4;
    console.log(d);
}
// console.log(d);//error not defined because function not called

c();
console.log(d);//no prob


//local and global can have same name in that global has prefrece
var vc3=34;
function c3()
{
    var vc3=3;
    console.log(vc3);
}
c3();//prints 3
console.log(vc3);//prints 34


//let has block level scope

var a12=321;
if(a12==321)
{
    var b12=32;
}
console.log(b12);//prints 32


let a122=321;
if(a122==321)
{
    let b122=32;
}
// console.log(b122);//undeffined error

//cosnt has same scope as let

//array and object can be changed
//redeclararion restricted

const ava=[1,2,3,4];
// ava=[1,3,3,4];//error
ava[2]=4;