// // 1 - criando uma função
// function minhaFuncao() {
//     console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function () {
//     console.log("Função em variável");
// }

// minhaFuncaoEmVariavel();

// // function funcaoComParametro (txt) {
// //     console.log (`Imprimindo: ${txt}`);
// // }

// // funcaoComParametro ("Imprimindo alguma coisa");

// // funcaoComParametro ("Outra função")

// function jogando (jogo) {
//     console.log (`Está jogando: ${jogo}`)
// }

// function player (user) {
//     console.log (`${user}`)
// }

// player ("Davizeira061")
// jogando ("CSGO2")

// // 2 - return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b);
// console.log(resultado);

// console.log(soma(c, d));

// // 3 - escopo da função
// let y = 10;

// function testandoEscopo() {
//     let y = 20;
//     console.log (`Y dentro da função é: ${y}`);
// }

// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// // 4 - escopo alinhado
// let m = 10;

// function escopoAninhado() {
//     let m = 20

//     if (true) {
//         let m = 30

//         if (true) {
//             let m = 40

//             console.log(m);
//         }

//         console.log(m);
//     }

//     console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - arrow function
// const testeArrow = () => {
//     console.log("Essa é uma arrow funciton");
// }

// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par")
//         return
//     }
//     console.log("Impar")
// }

// parOuImpar(5);
// parOuImpar(2);
// parOuImpar(4);
// parOuImpar(9);

// // 6 - mais sobre arroe functions
// // modelo 1
// const raizQuadrada = (x) => {
//     return x * x;
// }
// console.log(raizQuadrada(4));

// // modelo 2
// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2(5))
// console.log(raizQuadrada2(12))

// // 7 - parametro opcional

// const multiplication = function (m, n) {
//     if (n === undefined) {
//         return m * 2;
//     }   else {
//         return m * n;
//     }
// };
// console.log(multiplication(5));
// console.log(multiplication(2, 3));

// 8 - valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
}

console.log(customGreeting("Davi"));
console.log(customGreeting("João", "Bom dia"));

// 9 - closure
function someFunction() {
    let txt = "Algum texto";

    function display() {
        console.log(txt);
    }
    display();
}
someFunction();

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c1);

console.log(c1(5));
console.log(c2(10));

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar!");
    } else {
        const x = n - m
        console.log(x)
        untilTen(x, m)
    };
};

untilTen(100, 5);

