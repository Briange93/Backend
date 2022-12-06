/*const http = require('http');

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end('hola mundo')
}) 

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto${connectedServer.address().port}`);
})
let today = new Date();

console.log('hora' , today.getHours());*/
const fs = require ('fs')
 const express = require('express');
 const app = express();

 const port = 8080;

 const server = app.listen(port, ()=>{ console.log('Servidor OK', server.address().port)});

 app.get('/productos', (req, res) => 
 {res.send( fs.readFileSync('./productos.txt'));
});