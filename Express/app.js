const express=require('express')
const bodyparser=require('body-parser')
const path=require('path');

const app=express();

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop');


app.use(bodyparser.urlencoded({extended: false}));

app.use(adminRoutes)
app.use(shopRoutes)
app.use((req,res,next)=>{//target when any untarcked thing after / comes up
	//res.status(404).sendFile(path.join(__dirname,"views","404.html"));
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);