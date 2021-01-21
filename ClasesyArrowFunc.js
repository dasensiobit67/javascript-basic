//Autoinvocar funcion
var suma1 = function(num1, num2) {
    return num1 + num2;
}(1,2); 

console.log(suma1);

//Autoinvocar Arrow function
var suma = ((n1,n2) => {
    return n1 + n2;
})(4,6) 

console.log(suma);


//Exercici nivell 2
function DonaNom(nom,cognom){
    var obj = {
        name:  nom,
        lastname: cognom
        };
      return obj;
}

console.log(DonaNom('Dani','Asensio'));
var myObj=DonaNom('Dani','Asensio');
console.log(myObj.name+" "+myObj.lastname);


//Exercici nivell 2 amb Arrow Function

let obj = (nom,cognom) => {
    var obj = {
        name:  nom,
        lastname: cognom
        };
      return obj;
}

console.log(obj('Dani','Asensio'));
console.log(obj('Pere').name);