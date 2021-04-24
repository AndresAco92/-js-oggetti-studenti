var documentStudent = {
  nome: 'Lodovico',
  cognome: 'Pruni',
  eta: 46
};

for(var student in documentStudent){
console.log(student);
};

console.log('-----------------');


var arrStudent = [
{
  nome: 'Lodovico',
  cognome: 'Pruni',
  eta: 20
},
{
  nome: 'Maria',
  cognome: 'Lola',
  eta: 18
},
{
  nome: 'Alberto',
  cognome: 'Lorenzini',
  eta: 19
},
{
  nome: 'Daniele',
  cognome: 'Fabbri',
  eta: 17
}
];

for(var studenti_vari of arrStudent){
  console.log(studenti_vari);
}

console.log('-------------------------');

var stnuovo_nome = prompt('Scrivi il nome nuovo studente:');
var stnuovo_cognome = prompt('Scrivi il cognome del nuovo studente:');
var stnuovo_eta = parseInt(prompt('Scrvi anche la eta:'));


arrStudent.push({
  nome : stnuovo_nome,
  cognome : stnuovo_cognome,
  eta : stnuovo_eta
});


for(var logStudent of arrStudent){
  for(var key in logStudent){
    console.log(key + ' :  ' + logStudent[key]);
  }
}