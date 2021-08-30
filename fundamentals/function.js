// function having default arguments
const sum = (...args) => sum(args);

//reducer 
const sum = (...args) => args.reduce((accumulator, curr) => accumulator + curr);
