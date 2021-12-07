const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url =='/home' || req.url ==='/'){
        let data=fs.readFileSync('project/home.html');
        res.write(data);
    }
    else if(req.url === '/home/welcome'){
        let data =fs.readFileSync('project/welcome.html');
        res.write(data);
    }
    
    else if(req.url === '/home/about'){
        let data =fs.readFileSync('project/about.html');
        res.write(data);
    }
    else if(req.url === '/home/cake'){
        let data =fs.readFileSync('project/cake.html');
        res.write(data);
    }
    else{
        let data=fs.readFileSync('project/error.html');
        res.write(data);
    }
    res.end();
}).listen(8080,() => console.log('server started'));