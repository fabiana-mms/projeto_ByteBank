import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Clientes
const cliente = new Cliente("Sueli", 78945612312, "789456");

//Funcionarios
const diretor = new Diretor("Fabiana", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678911);
gerente.cadastrarSenha("123654");

//Clientes
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789456");

//Funcionarios
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123654");

console.log(clienteEstaLogado);

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);















// import {ContaCorrente} from "./Conta/ContaCorrente.js"
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
// import {ContaSalario} from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Fabiana", 11122233344);     

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); 
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.depositar(850);
// contaPoupanca.sacar(10);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(50);

// console.log(contaCorrenteRicardo);
// console.log(contaPoupanca);
// console.log(contaSalario);

//O arquivo index.js fica sendo meu arquivo de execucao.

//ctrl + alt + pra baixo ou pra cima seleciona varias linhas.
//Objeto sera cada cliente de um banco junto dos seus atributos que sao as caracteristicas atreladas ao objeto.
//Classe e meu molde, o itens que contara para formar um objeto, neste caso, itens para compor um cliente para um banco.
//Metodo/funcao sao os comportamentos de um objeto. 
//cliente1 e uma instancia da classe cliente, pertence a classe de cliente.
//No contexto de execução global (fora de qualquer função/metodo), this refere-se ao objeto global, que serve para qualquer objeto especifico.
//Para que o index.js seja executado com seus arquivos de classes, deve-se no proprio terminal da o comando npm init, atrubuir package name e description e por onde comecar a leitura.
//Yes no final e vera que um arquivo package.json sera criado.
//Gerenciador de pacotes NPM Node package manager.
//CTRL + J abre o terminal