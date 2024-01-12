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

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raça = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

// 6 - função com classe - função construtora
function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro

}

const ragnar = criarCachorro("Ragnar", "Pit Bull");
console.log(ragnar);

const azula = criarCachorro("Azula", "Vira-lata");
console.log(azula);


















