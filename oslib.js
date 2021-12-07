const os=require('os');
console.log('total memory',os.totalmem());
console.log('total free memory',os.freemem()/1000000000);
console.log('home directory',os.homedir());
console.log('platform',os.platform());
console.log('network interface',os.networkInterfaces());
console.log('uptime',os.uptime());
