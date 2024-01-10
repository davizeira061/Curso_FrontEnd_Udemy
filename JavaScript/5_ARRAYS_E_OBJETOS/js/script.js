// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Davi", true, 5, 7.8, []]
console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e",]
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[8]);

// 3 - propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Davi";
console.log(myName.length);

// 4 - métodos
const outherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(outherNumbers);

console.log(allNumbers);

const text = "Algum texto"
console.log(text.toLocaleUpperCase());
console.log(typeof text.toLocaleUpperCase);
console.log(text.indexOf("g"));

// 5 - objetos
const person = {
    name: "Davi",
    age: 23,
    job: "Desenvolvedor",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person.name);
console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: "AP 2.0",
    brand: "VW",
    model: "Voyage",
};

console.log(car);
delete car.engine;
console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)
console.log(obj)

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Davi",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 23;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["Davi", "João", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
};

// 11 - push e pop
const array = ["a", "b", "c"]
array.push("d");
console.log(array);

array.pop();
console.log(array);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.lastIndexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Mamão"));
console.log(myElements.indexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4);

console.log(subArray)
console.log(testeSlice)

// 15 - ForEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

// 16 - Includes
const brands = ["BMW", "VW", "FIAT"];

console.log(brands.includes("FIAT"))

// 17 - Reverse
const reverseTeste = [1, 2, 3, 4, 5];

reverseTeste.reverse();

console.log(reverseTeste);

// 18 - Trim
const trimTest = "    testando  \n      "

console.log(trimTest)
console.log(trimTest.trim())

// 19 - PadStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - Split
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - Join
const fraseDeNovo = "O rato roeu a roupa do rei de Roma";

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "Testando ";
console.log(palavra.repeat(4));

// 23 - rest operator

const somaInfinita = (...args) => {

    let total = 0 

    for(let i = 0; i < args.length; i++){
        total += args [i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 34));

// 24 - for of
const somaInfinita2 = (...args) => {
    
    let total = 0;
    
    for(num of args){
        total += num;
    }
    
    return total;
};

console.log(somaInfinita2(1, 20, 34));

// 25 - Destructuring
const userDetails = {
    firstName: "Davi",
    lastName: "Cavalcante",
    job: "Estudante"
}

const {firstName, lastName, job} = userDetails;

console.log(userDetails)
console.log(firstName, lastName, job)

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(myList);
console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON 
const myJson = 
    '{"name": "Davi", "age": 23, "skills": ["HTML", "CSS"]}';

console.log(myJson)

// JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);






















