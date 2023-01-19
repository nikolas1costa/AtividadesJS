var fs = require('fs');
var http = require('http');
var url = require('url');

function readFile(response,file) {
    fs.readFile(file, function (err, data) {
        response.end(data);
    });
}
var callback = function (request, response) {
    response.writeHead(200, { "Content-type": "application/json: charset=utf-8" });

    var parts = url.parse(request.url);
    var path = parts.path;

    if (parts.path == "/rota1/cadastro") {
        readFile(response, "cadastro.json");
    } else if (parts.path == "/rota1/catalogo"){
        readFile(response, "catalogo.json");
    } else if(parts.path == "/rota1/dados"){
        readFile(response, "dados.json");
    }else{
        response.end("Rota não mapeado: " + parts.path);
    }
};

//servidor http
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");