export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}

//Abrir um arquivo no qual inicio com letra maiuscula, significa um arquivo para trabalhar com classes. Cada classe aberta um arquivo.