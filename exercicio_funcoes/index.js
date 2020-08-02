//Questão-01
function parOrimpar(num) {
  if (num % 2 == 0) {
    console.log('This number is par');
  } else {
    console.log('This number is ímpar');
  }
}

//Questão-02
const primo = (num) => {
  var aux;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      console.log('This number is not primo');
      aux = false;
      break;
    }
  }
  if (aux != false) {
    console.log('This number is primo');
  }
}

//Questão-03
function msg2() {
  console.log('Feliz ano novo');
}
function msg(callback) {
  i = 1;
  while (i <= 10) {
    (function loop(i) {
      setTimeout(function () {
        console.log(i);
      }, 2 * i)
    })(i);
    i++;
  }
  callback();
}

//Questão-04
// var contador = function () {
//   return new Promise(function (resolve, reject) {
//     i = 1;
//     while (i <= 10) {
//       console.log(i);
//       i++;
//     }
//     resolve();
//   });
// }

// var p = contador().then(function () {
//   console.log("Feliz ano novo")
// })

//Questão-05
function contador() {
  return new Promise(resolve => {
    setTimeout(() => {
      i = 1;
      while (i <= 10) {
        console.log(i);
        i++;
      }
      resolve();
    }, 2000);
  });
}

async function msg() {
  const msg = await contador();
  console.log('Feliz ano novo');
}

//msg();

//Questão-06
const notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

function imprimirNotasAcimadeSete(notas) {
  for (i = 0; i < notas.length; i++) {
    nota = notas[i];
    if (nota > 7) {
      console.log(nota);
    }
  }
}

//imprimirNotasAcimadeSete(notas);

//Questão-07
const productList = [
  { name: 'Feijão', value: 8.00 },
  { name: 'Arroz', value: 3.70 },
  { name: 'Macarrão', value: 2.40 },
  { name: 'Cuscuz', value: 2.70 },
];

function somarCompras(produtos) {
  var soma = 0;
  for (i = 0; i < produtos.length; i++) {
    soma = soma + produtos[i].value;
  }

  return soma;
}

//console.log("A soma dos produtos deu: " + somarCompras(productList));

//Questão-08
const alunosList = [
  { name: 'João', class: 8 },
  { name: 'Deisy', class: 9 },
  { name: 'Rafael', class: 8 },
  { name: 'Amanda', class: 9 },
];

function destribuirAlunos(alunos) {
  var alunosHistoria = [];
  var alunosFisica = [];

  for (i = 0; i < alunos.length; i++) {

    if ((alunos[i].class) == 8) {
      alunosHistoria.push(alunos[i].name);
    } else {
      alunosFisica.push(alunos[i].name);
    }
  }
  console.log('Aluno terão aula história: ' + alunosHistoria);
  console.log('Aluno terão aula Física: ' + alunosFisica);
}

destribuirAlunos(alunosList);