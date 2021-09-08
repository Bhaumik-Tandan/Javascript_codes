let options = {
    mode: 'text',
    pythonOptions: ['-u'], 
      scriptPath: '', 
    args: [] 
};
const {PythonShell} =require('python-shell');
PythonShell.run('pyt.py', options, function (err, result){
if (err) throw err;
console.log('result: ', result.toString());
});