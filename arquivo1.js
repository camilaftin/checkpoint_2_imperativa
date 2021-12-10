/* Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.
*/

/*Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
em 1.*/

let soma = 0;


let Aluno = {
  todosAlunos: [],
  nome: null,
  quantFaltas: null,
  listaNotas: [],
  
  dadosAlunos: function(nome, quantFaltas, listaNotas){
    this.nome = nome;
    this.quantFaltas = quantFaltas;
    this.listaNotas = listaNotas;

    const alunos = {
      nome: this.nome,
      quantFaltas: this.quantFaltas,
      listaNotas: this.listaNotas
    }
    this.todosAlunos.push(alunos);
  },
  
  calcularMedia: function(listaNotas){
    this.listaNotas = listaNotas;
    soma = 0;
    for(let i = 0; i < this.listaNotas.length;i++){
        soma += this.listaNotas[i];
      }
      return (soma/this.listaNotas.length);   
  },
  faltas: function (quantFaltas){
    this.quantFaltas =  quantFaltas;
    return this.quantFaltas+1;
  },
  
}



/* ---- INSERÇÃO INICIAL DOS ESTUDANTES ----*/
//fazer alteracao dos dados aqui tambem
Aluno.dadosAlunos("Ryu", 0, [4,5,6,7]);
Aluno.dadosAlunos("Ed Honda", 2, [10,2,5,8]);

//exportacao
module.exports = Aluno;
