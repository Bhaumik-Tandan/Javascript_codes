function a(a,b,callback)
{
    console.log("I am in a "+a+b);
    callback();
}
function c()
{
    console.log("I am in C");
}
a(1,2,c);