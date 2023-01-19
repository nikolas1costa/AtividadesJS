// var a = 1
// var b = 2
// var c = a + b;
// console.log(c);
// console.log("O resultado é: " + c);
// function testeVar() {
//     var a = 1
//     var b = 2
//     var soma = a + b;
//     var nome = "Joaozinho da silva";
//     console.log("Olá %s, o resultado da soma é: %d ", nome, soma);
// }

// testeVar();
//-------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------
// function testeVar() {
//     var a = 1
//     var b = 2
//     var soma = a + b;
//     var nome;

//     if (nome == undefined) {
//         console.log("Teste 1 - O nome não foi inicializado");
//     }

//     if (typeof (nome) == "undefined") {
//         console.log("teste 2 - o nome nao foi inicializado")
//     }

//     console.log("O tipo do nome é %s e o tipo da soma é %s", typeof (nome), typeof (soma));
//     console.log("Olá, %s! O resultado da soma é: %d", nome, soma, "que", "legal");
// }

//testeVar();
//-------------------------------------------------------------------------------------------------------------


// function testeArray() {
//     var numeros = [1, 2, 3]
//     numeros.push(4);
//     numeros.push(5);
//     for (let i in numeros) {
//         console.log(numeros[i]);
//     }
// }

// testeArray();

//-------------------------------------------------------------------------------------------------------------

//  function testeArray(){
//     var numeros = [1, 2, 3]
//     numeros.push(4);
//     numeros.push(5);
//     numeros.map(n => console.log(n));
//  }
// testeArray();

//-------------------------------------------------------------------------------------------------------------

// function objeto1() {
//     var pessoa = {
//     nome : "Joao",
//     hello: function () {
//         return "Hello pessoa"
//     }
// }
//     console.log(pessoa);
//     console.log(pessoa.nome)
//     console.log(pessoa.hello())
// }

// objeto1();

// //-------------------------------------------------------------------------------------------------------------

// function Pessoa(){
//     this.nome = "joao",
//     this.hello = function () {
//         return "Hello Pessoa";
//     }
// }

// function objeto3() {
//     var pessoa = new Pessoa();
//     console.log(pessoa);
//     console.log(pessoa.nome);
//     console.log(pessoa.hello())
// }
// objeto3();

//-------------------------------------------------------------------------------------------------------------
class Pessoa {
    constructor(){
        this.nome = "Joao"
    }
    hello(){
        return "hello pessoa";
    }
}

function objeto4(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
//-------------------------------------------------------------------------------------------------------------
