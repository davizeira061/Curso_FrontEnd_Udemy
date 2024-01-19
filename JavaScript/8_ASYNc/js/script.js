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

// 5 - rejeição
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(40);
const b = checkNumber(6);

a.then((v) => console.log (`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreeu: ${err}`)
);

b.then((v) => console.log (`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreeu: ${err}`)
);

// 6 - Async functions
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
});

console.log("teste async");

// 7 - async await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve("Resolveu a Promise");
    }, 2000);
    });
}

async function chamadaAsync() {
    console.log('Chamando a Promise e esperando o resultado');
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 8 - generators




























