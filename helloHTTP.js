//carrega o modulo HTTP
const http = require ('http');

//Cria um servidor HTTP no qual envia uma msg
var server = http.createServer(function (request, response){

    //define o cabecalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});

    //mensagem de retorno
    response.end("Ola mundo node!\n");
});
//porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");