function fun(a,b)
{
    a=b;
}

a=76;
fun(a,89);
console.log(a);

a="76";
fun(a,"89");
console.log(a);

a=[76];
fun(a,[89]);
console.log(a);

a={7:76};
fun(a,{9:89});
console.log(a);

