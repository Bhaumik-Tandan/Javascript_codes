var cp=require("child_process");
var progs=
{
    list:"ls",
    copy:"cp",
    folder:"mkdir"
}

var child=cp.spawn(progs.list);
child.stdout.on("data",(d)=>{
    console.log(`${d}`);
});


var c=cp.spawn("git",["status"]);
c.stdout.on("data",(err)=>{
    console.log(`${err}`);
});

var e=cp.spawn("git",["staus"]);
e.stderr.on("data",(err)=>{
    console.log(`${err}`);
});


