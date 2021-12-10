/*Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).*/

/*Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso*/

/*Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.*/

/*Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não.*/

/* ---- IMPORTACAO DOS MODULOS -----*/
const Aluno = require('../checkpoint_2_imperativa/arquivo1');
const temp = require('../checkpoint_2_imperativa/index');
const temp2 = require('../checkpoint_2_imperativa/index');
const listaBooleana = require('../checkpoint_2_imperativa/index');
const estudantes = require('../checkpoint_2_imperativa/estudantes');


let curso = {
  nomeDoCurso: null,
  notaDeAprovacao: 5,
  faltasMaximas: 3,
  nome: null,
  quantFaltas: null,
  listaNotas: [],
  //alterar para estudantes para usar o arquivo estudantes.js
  listaDeEstudantes: Aluno.todosAlunos,
  media: null,
  falta: null, 
  booleana: listaBooleana, 
  
  //adiciona aluno ao objeto
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
    
    //o metodo recebe a propriedade aluno1 e 2 - desafio 5
    metodoCurso: function(aluno1, aluno2){
    this.media = aluno1;
    this.falta = aluno2;
        
    for(let i = 0; i < curso.listaDeEstudantes.length; i++){
      if((this.media > this.notaDeAprovacao) && (this.falta < this.faltasMaximas)){
        return `Aprovado`;
      } else if((this.falta === this.faltasMaximas) && ((this.media > (this.notaDeAprovacao*1.1)))) {
        return `Aprovado`;
      } else{
        return `Reprovado`;
      }
    }
  },
  //desafio 6
    percorrerArray: function(listaBooleana){
      this.booleana = listaBooleana;
        for(let i = 0; i < curso.listaDeEstudantes.length; i++){
          console.log('Aluno ' + curso.listaDeEstudantes[i].nome + " --- " + this.booleana[i]);  
        }
        console.log("\nO vetor:");
        console.log(listaBooleana);
      }
      
}
//exportacao
module.exports = curso;
