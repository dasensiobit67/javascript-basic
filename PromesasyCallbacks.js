//--Exercici 1 Promesa amb 2 missatjes diferents-- 

function devuelvePromesa(siono) {
    return new Promise( (resolve, reject) => {
        let todoCorrecto = siono;
        if (todoCorrecto) {
            resolve('Todo ha ido bien');
        } else {
            reject(new Error('Algo ha fallado'));
        }
    })
  }

console.log(devuelvePromesa(true));
console.log(devuelvePromesa(false)
    .then(null, error => { console.log('Error:', error.message); }));

//Exercici 2 Callback amb Arrow Function que retorna 2 missatjes diferents

const x = (parametre, callback) => {
    if(parametre=='1'){
        callback("Missatge 1") 
    }
    if(parametre=='2'){
        callback("Missatge 2") 
    }

}

x('1',mostra);
x('2',mostra);

function mostra(msg){
    console.log(msg);
}

//Nivell 2 retornar nom y salari amb Promisse 

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let res=[];
            for(i=0;i<salaries.length;i++){
                if(salaries[i].id==id){
                    res[0]=employees[i].name;
                    res[1]=salaries[i].salary;
                }
            }
            resolve(res);
        }, 2000)
    })
}

//--Nivell 3 control de errors amb catch--

getSalario('3')
.then((res) => console.log(res[0]+" cobra "+res[1]+'$'))
.catch((err) => console.log("Error:"+err));

