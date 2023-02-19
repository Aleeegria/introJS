function User(nome, email, role) {
    this.nome = nome;
    this.email = email;
    this.role = role;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}, ${this.role}`;
    }
}

const novoUser = new User('Maria', 'maria@dominio.com');
console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, "Maria", "maria@domino.com", "admin");
    this.role == role || "estudante";
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin("admin");
console.log(novoUser.exibirInfos());
console.log(novoUser.role);

const user = {

    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function(nome) {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init("Roberto", "rob@dominio.com");

console.log(novoUser.exibirInfos());
console.log(user.isPrototypeOf(novoUser));



