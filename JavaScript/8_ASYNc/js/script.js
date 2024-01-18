// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function () {
    console.log("Requisição assíncrona");
}, 5000)
console.log("Ainda não executou 2");

// 2 - setInterval
// console.log("Ainda não começou");

// setInterval(function(){
//     console.log("Intervalo assíncrono")
// }, 5000);
// console.log("Ainda não começou 2");

// 3 - promises
const promessa = Promise.resolve(5 + 5);
console.log("teste");

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value;
})
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));

console.log("teste");

// 4 - falha na promise
Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`));








