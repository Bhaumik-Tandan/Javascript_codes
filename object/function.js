const a={
    hour: 8,
    minute: 9,
    getsec: function(s){
        const ar=(()=>[this.hour,this.minute,s]);//arrow function uses enclosing this
        return this.cal(...ar());
    },

    cal: (h,m,s)=>{//this key word cannot used in case of arrow functions
        return (h*60+m)*60+s;
    },

    add:((s)=>s+1),

    get h(){//getter
        return this.hour;
    },

    set s(s){
        this.second=s;
    }
}

console.log(a.getsec(8));
console.log(a.cal(8,9,8));
console.log(a.cal(8,9,a.add(8)));


for(let x in a)//prints everrything
console.log(a[x],x);

let b=Object.values(a);
console.log(b);//gives array of values

a.s=90;//call setter
console.log(a.h,a.second);

Object.defineProperty(a, "increment", {
    get : function () {this.hour++;}
  });
a.increment;
