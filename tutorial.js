const Joi = require('joi')
let mysql = require('mysql');
const express = require('express');
const app = express();

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});
app.use(express.json());
const courses = [{
id:1,name:"zaid"},
{
id:2,name:"hamza"},
{
id:3,name:"bilal"},
    

];
app.get('/',(req,res)=>{
    res.send("hel  o")
})
app.get('/courses',(req,res)=>{

    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{

const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('the course was not found ')


    res.send(course)


})

app.post('/courses',(req,res)=>{

    // const course = courses.find(c => c.id === parseInt(req.params.id));
    // if(!course) res.status(404).send('the course was not found ')
    course= {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    
    
        res.send(course)
    
    
    })
    
app.put('/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    
    const schema = {   name:Joi.string().min(2).required() };
const result = Joi.validate(req.body, schema);

if(result.error){ res.status(400).send(result.error.details[0].message  );
    return;}
course.name = req.body.name;
res.send(course);
 
})


app.delete('/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    
    const schema = {   name:Joi.string().min(2).required() };
const result = Joi.validate(req.body, schema);

if(result.error){ res.status(400).send(result.error.details[0].message  );
    return;}
const l =courses.indexOf(course);

courses.splice(l,1)


res.send(courses);
 
})


app.get('/courses/:month/:year',(req,res)=>{


    res.send(req.query)

})

const PORT =process.env.PORT ||2343
app.listen(PORT,()=>console.log(`Listening at ${PORT}  `)
)
// app.post()
// app.delete()
// app.

