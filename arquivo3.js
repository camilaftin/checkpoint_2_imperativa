/*Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso*/

const Aluno = require('../checkpoint_2_imperativa/arquivo1');
const curso = require('../checkpoint_2_imperativa/arquivo2');


let adicionarAluno = {
  nome: null,

  addAlunos: function(nome, quantFaltas, listaNotas){
    this.nome = nome;
    this.quantFaltas = quantFaltas;
    this.listaNotas = listaNotas;

    let add = {
    nome: this.nome,
    quantFaltas: this.quantFaltas,
    listaNotas: this.listaNotas
    }
    curso.listaDeEstudantes.push(add);
  },

  /*exibirAlunos: function(){
    return this.listaDeEstudantes;
  }*/
}

/*adicionarAluno.addAlunos("teste");
console.log(curso.listaDeEstudantes);*/

//module.exports = adicionarAluno;