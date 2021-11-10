export class Cliente {
    
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    autenticar(){
        return true;
    }
}

//Abrir um arquivo no qual inicio com letra maiuscula, significa um arquivo para trabalhar com classes. Cada classe aberta um arquivo.