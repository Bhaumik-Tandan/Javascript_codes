//function

//variable declared with var have block level scope

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