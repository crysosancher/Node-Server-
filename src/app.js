const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{//(request,response)
	//console.log("req.url=",req.url,"\nreq.mthod=",req.method,"\nreq.headers",req.headers);
	const url=req.url;
	const method=req.method;
	if(url==='/'){
	res.write('<html>')
	res.write('<head><title>Message server</title></head>')
	res.write('<body><form action="/message" method="POST"><input type="text" name="beti"><button type="submit">Send</button></form></body>');
	res.write('</html>')
	return res.end();
	}
	const body=[];
	if(url==='/message' && method==='POST'){
		req.on('data',(chunck)=>{
			console.log(chunck)
			body.push(chunck);
		})
		req.on('end',()=>{
			const parsedbody=Buffer.concat(body).toString();
			const message=parsedbody.split('=')[1];
			fs.writeFileSync('message.txt',message);
			console.log(parsedbody);
		})
		
		res.statusCode=302;
		res.setHeader('Location','/')
		return res.end();
	}
	res.setHeader('Content-Type','text/html');
	res.write('<html>')
	res.write('<head><title>hi this is my server</title></head>')
	res.write('<body><h1>This is Vibhu the Boss</h1></body>')
	res.write('</html>')
	res.end();
	//process.exit();
})
server.listen(3000);