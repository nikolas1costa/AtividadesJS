//carrega o modulo HTTP
const http = require ('http');
var url = require('url');
//Cria um servidor HTTP no qual envia uma msg
var callback = function (request, response){

    //define o cabecalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});
    
    //faz o parse da url separando o caminho(rota)
    var parts = url.parse(request.url);

    if (parts.path == "/") {
        response.end("Site principal");
    } else if (parts.path == "/rota1"){
        response.end("Site da rota 1 ")
    } else {
        response.end("Rota invalida: " + parts.path);
    }
    
};
//servidor http
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");