import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Fabiana", 11122233344);     
const cliente2 = new Cliente("Ricardo", 44433322211);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1); 
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);

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