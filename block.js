var fs = require('fs');
fs.readFile('text.txt',function(err,data){
if(err){
    console.log(err.toString);
}
setTimeout(()=>{
    console.log("Dispaly after 2 seconds");
    
},2000);
console.log(data.toString);
})

console.log("start here ");
