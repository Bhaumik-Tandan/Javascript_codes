const inp=require("./a.json");
const out={};
var fs = require('fs');


for(let i in inp)
    for(let j in inp[i])
    {
        if(!out[j])
        out[j]={};
        out[j][i]=inp[i][j];
    }

fs.writeFile("out.json", JSON.stringify(out),()=>{});
