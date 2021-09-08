b="eded";
a=`my ${b}`;

function replace()
{
    for (let i in arguments) {
        h=h.replace("{}",arguments[i]);
      }
}

h=`{} {} lml n`;
replace("4","5");
console.log(h);