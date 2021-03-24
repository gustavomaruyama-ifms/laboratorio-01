const express = require('express');
const app = express();

app.use(express.json({extended:false}));
app.use(express.static('public',{}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/public/index.html')
});

let mensagem = {};

app.post('/enviarMensagem', function(request, response){
    mensagem = request.body;
    console.log("Mensagem Chegou:",mensagem);
    response.status(200).send();
});

app.get('/receberMensagem', function(request, response){
    response.status(200).json(mensagem);
});

app.listen(3000, function(){
    console.log("Servidor no ar");
});