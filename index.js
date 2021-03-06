


const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const express = require('express');
// const app = express();


// const Joi = require('joi')
// app.get('/',(req,res)=>{
//     res.send("hel  o")
// })



// // let mysql = require('mysql');
// // let connection = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'sampleDB',});

// // connection.connect(function(err) {
// //   if (!!err) {
// //     return console.error('error: ' + err.message);
// //   }
// //   else{

// //   console.log('Connected to the MySQL server.');

// //   }
// // });


// // app.get('/',function(req,res){

// //   connection.query('SELECT * FROM sampleDB',function(  qerror,rows,fields  ){
// //       if(error){
// //         console.log('error');

// //       }
// //       else{
// //         console.log('success');

// //       }


// //   });
// // })
// app.listen(1337);
