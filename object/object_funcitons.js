const obj={
    a:"DSdsd",b:"Sdcsd"
}
const t=Object.create(obj);
console.log(t.a);
Object.freeze(obj);
//object does not change
obj.a=232;
console.log(obj);
t.b=23;
console.log(t.b);


const ob={
    a:"Sdf";
}

Object.defineProperty(ob, "language", {value : "NO"})
Object.getOwnPropertyNames(ob);  // Returns an array of properties