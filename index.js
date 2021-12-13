/* ------ IMPORTS -------*/
const Aluno = require('../checkpoint_2_imperativa/aluno');
const curso = require('../checkpoint_2_imperativa/curso');
const aprovacao = require('../checkpoint_2_imperativa/curso');
const estudantes = require('../checkpoint_2_imperativa/estudantes');


/* ------INSERCAO DE DADOS ------*/
//alterar os dados dos alunos aqui e no arquivo 1
//insercao dos alunos no arquivo1

Aluno.dadosAlunos("Ken Masters", 1, [1,2,3,4]);
Aluno.dadosAlunos("Blanka", 3, [5,5,5,5]);

//insercao dos novos alunos no arquivo 2
curso.addAlunos("Guile", 0, [7,7,7,7]);
curso.addAlunos("Balrog", 7, [7,7,7,7]);


/* ----IMPRESSAO -----*/

//impressão da lista de estudantes
console.log(curso.listaDeEstudantes);

//variaveis para o calculo da media e falta
let medias;
let faltas;
//objeto para a lista de array de booleanos
let listaBooleana = {
    valor: []
};

//aqui faz a impressao de todos os dados dos alunos
for(let i = 0; i < curso.listaDeEstudantes.length; i++){
    
    console.log("\nNome aluno " + i + " : " + curso.listaDeEstudantes[i].nome + "\n" +
                "Quantidade de faltas: " + curso.listaDeEstudantes[i].quantFaltas + "\n" +
                "As notas são: " + curso.listaDeEstudantes[i].listaNotas + "\n" + 
                `A falta foi para ` + Aluno.faltas(curso.listaDeEstudantes[i].quantFaltas) + "\n" +
                "A media consiste em: " + Aluno.calcularMedia(curso.listaDeEstudantes[i].listaNotas) + "\n" +
                "--------------------------"
                );
    //get para a media e falta dos alunos
    medias = Aluno.calcularMedia(curso.listaDeEstudantes[i].listaNotas);
    faltas = curso.listaDeEstudantes[i].quantFaltas;
    
    console.log(`Resultado: `+ curso.metodoCurso(medias, faltas) + "\n");

    //get de aprovado ou reprovado
    listaBooleana.valor[i] = curso.metodoCurso(medias, faltas);
}
//aqui altera os valores das condicoes de aprovado e reprovado para o array de booleanos
for(let i = 0; i < listaBooleana.valor.length; i++){
    if(listaBooleana.valor[i] === 'Aprovado'){
        listaBooleana.valor[i] = true;
    } else {
        listaBooleana.valor[i] = false;
    }
}
//chamada a funcao dentro do objeto curso passando como parametro o array de booleanos
curso.percorrerArray(listaBooleana.valor);

//exportacao 
module.exports = medias;
module.exports = faltas;
module.exports = listaBooleana;