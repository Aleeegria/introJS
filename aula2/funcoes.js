const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    fone: ["11 987654321", "11 32456789"],
    saldo: 200,
    efetuaPgto: function(valor){
        if(valor > this.saldo) {
            console.log("Saldo insuficiente !");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo},00 !`);
        }
    },
};

cliente. efetuaPgto(250);
cliente. efetuaPgto(50);
