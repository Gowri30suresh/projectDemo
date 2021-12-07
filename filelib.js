const fs = require('fs');
/*
fs.readFile('meow.txt',(err,data)=>{
//err === null
    if(err  === null)
    {
 console.log(data.toString());
    }
     else{
        console.log(err.message);
    }
})*/
let d=fs.readFileSync('meow.txt');

fs.writeFile('meow.txt',d.toString() + ' hello gowri',(err) => {
    if(err == null){
        console.log('written');
    }
    else
    {
        console.log(err.message);
    }
});