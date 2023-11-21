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





