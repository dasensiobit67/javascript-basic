//Exercici Nivell 1
function DameNombre(nom){
    return nom;
}

console.log(DameNombre('Dani'));

//Exercici Nivell 2
console.log(`Tu nombre es: ${DameNombre('Dani')}`);

//Exercici Nivell 3
function f0(){return 'Dani'}
function f1(){return 'Asensio'}
function f2(){return 'Alberich'}


var funciones = [f0,f1,f2];

funciones.forEach(element => {
    console.log(element());
    
});