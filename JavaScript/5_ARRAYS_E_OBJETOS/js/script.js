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

