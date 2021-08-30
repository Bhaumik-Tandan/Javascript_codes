function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.h=()=>{
        return this.firstName+this.lastName;
    }    
  }
const a=new Person("#2","324",34,"23");
console.log(a.h());

Person.prototype.n ="l";//adding new propery n with value l
console.log(a.n);