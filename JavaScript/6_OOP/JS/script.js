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

// 7 - funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca
}

const husky = new Cachorro("Bob", "Husky");

console.log(husky);

//  8 - metodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("auuuuu!");
}
console.log(Cachorro.prototype);
husky.uivar();

// 9 - classe ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const spyke = new CachorroClasse("Spyke", "Labrador");
console.log(spyke);
console.log(Object(spyke));

// 10 - Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}
const scania = new Caminhao(6, "Vermelho")
console.log(scania);
scania.descreverCaminhao();
Caminhao.motor = 4;
const c2 = new Caminhao(4, "Preta");
console.log(c2);
console.log(c2.motor);
Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Azul");
console.log(c3.motor);

// 11 - get setter

// 12 - herança
class Mamifero{
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// 13 - Instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);











































