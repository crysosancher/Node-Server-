const express=require('express')

const app=express();
app.use((req,res,next)=>{//everything has to pass through these middleware
	console.log("in the middleware")
next();//Allows the req to continue to the next Middleware in line.
});
app.use((req,res,next)=>{
	console.log("in the another middleware")
	res.send('<h1>Vibhu is everywhere</h1>')

})

app.listen(3000);