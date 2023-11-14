// 1 - Variáveis
let nome = "Davi";
console.log(nome);

nome = "Davi Damasceno"
console.log(nome);

const idade = 23;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis
let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nomecompleto = "Davi Damasceno";
const nomeCompleto = "Davi Cavalcante";

console.log(nomeCompleto);
console.log(nomecompleto);

let _teste = "ok";
let $teste = "Ok";

console.log(_teste);
console.log($teste);

// 3 - prompt
// const age = prompt("Digite a sua idade: ");

// console.log (`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando!");

// const z = 10;
// alert(`${z}`)

// 5 - Math
// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.14));    

// console.log(Math.ceil(5.14));   

// // 6 - console
// console.log("Teste!")

// console.error("Erro!")

// console.warn("Aviso!")

// 7 - if
const m = 10;

if (m > 5) {
    console.log("m é maior que 5");
}

const user = "João"

if (user === "João") {
    console.log("Olá João!");
}

if (user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - else
const loggedIn = false

if (loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - else if
if (1 > 2) {
    console.log("Teste!");
} else if (2 > 3) {
    console.log("Teste 2!");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Davi"
const userAge = 23

if(userName === "Diogo") {
    console.log("Bem vindo Diogo!");
} else if (userName === "Davi" && userAge === 23) {
    console.log("Olá Davi, você tem 23 anos!");
} else {
    console.log("Nenhuma confição aceita!");
}

// 10 - While

let p = 0;

while(p<5) {
    console.log(`Repetindo ${p}`);
    p = p+1;
}

// Loop infinito
// let x=10

// while(x > 5) {
//     console.log(`Imprimindo ${x}`)
// }

