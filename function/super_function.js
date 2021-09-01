function a()
{
    let c=90
    function b()
    {
        c=89;
    }
    b();
    return c;
}
console.log(a());