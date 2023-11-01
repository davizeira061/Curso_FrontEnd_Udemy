// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -147);

// 2 - Operações aritiméticas
console.log(6-5);
console.log(10-5);
console.log(5*4);
console.log(40/4);

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "teste");

console.log(typeof NaN);

//  4 - String
console.log("Um texto");
console.log('Mais um texo');
console.log('12');

console.log(typeof "Um texto");
console.log(typeof "Mais um texto");

//  5 -  Simbolos especiais em String
console.log("Testando a \nquebra de linha")
console.log("Espaçamento \t de tab")

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?")

// 7 - Interpolação ou Template String
console.log(`A soma de 2 + 2 é: ${2+2}`);

// console.log(`Podemos executar qualquer coisa aqui ${console.log(teste)}`);

// 8 - Boolean
console.log(true);
console.log(false);
console.log(5>20);
console.log(30>20);
console.log(typeof false);

// 9 - Comparações
console.log(5<=5);
console.log(5<5);
console.log(10==10);
console.log(10==9);

// 10 - Idênticos
console.log(9=="9");
console.log(9==="9");
console.log(9+"9");
console.log(9+9);

// tipos diferentes
console.log(9!="9");

// Valor igual, mas tipos diferentes
console.log(9!=="9");

// 11 - Operadores lógicos
console.log(true && true);
console.log(true && false);

console.log(5>2 && 2<10);

console.log(5>2 && "Davi" === 1);

console.log(5>2 || "Davi" === 1);

console.log(5<2 || 5>10);

console.log(!true);

console.log(!5>2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null == undefined);
console.log(null === undefined);

console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5*null);

console.log('Teste' * 'opa');

console.log('10' + 1);

console.log('10' - 1);


