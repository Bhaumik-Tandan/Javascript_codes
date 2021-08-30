obj={a:"0"};
a=obj;
a.a=89;//changes obj too
console.log(obj);
b=a.constructor()
b.a=68;// a or obj not changed
console.log(a);