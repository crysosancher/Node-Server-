const express=require('express')

const app=express();
app.use('/',(req,res,next)=>{
	console.log("I must run everytime")
	next();//easily going to any next condition. Note->req moves from top to bottom

})

app.use('/message',(req,res,next)=>{
	res.send('<h1>This what she said what Vibhu is everywhere</h1>')
})

app.use('/',(req,res,next)=>{
	console.log("in the another middleware")
	res.send('<h1>Vibhu is everywhere</h1>')
})

app.listen(3000);