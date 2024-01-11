// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("au au")
    }
};

console.log(animal.nome);
animal.latir();

// 2 - apronfundando métodos
const pessoa = {

    nome: "Davi",
    getNome: function () {
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }

};

console.log(pessoa.nome);
console.log(pessoa.getNome);
console.log(pessoa.getNome());
pessoa.setNome("Teste");

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

// 4 - mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);


















