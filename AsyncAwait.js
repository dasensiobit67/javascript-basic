//Exercici 1 ----------------------
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

//Respuesta Instantanea

/*const getEmpleado = () => {
    return employees;
}

console.log(getEmpleado());*/


//Respuesta con retardo 

const getEmpleado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(employees);
        }, 2000)
    })
}

//manejada con Promisse

getEmpleado()
.then((employees) => console.log(employees))
.catch((err) => console.log("Error:"+err));

//manejada con async/await

async function Dame(){
    try{
        const empleados = await getEmpleado();
        console.log(empleados);
    }
    catch(err){
        console.log(err);
    }
    
}

Dame();

//Nivel 2 Retorno de nombre y salario por id con retardo de 2 segundos

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let res=[];
            for(x=0;x<salaries.length;x++){
                if(salaries[x].id==id){
                    res[0]=employees[x].name;
                    res[1]=salaries[x].salary;
                }
            }
            resolve(res);
        }, 2000)
    })
}

//manejada con async/await

async function DameSalario(id){
    try{
        const res = await getSalario(id);
        console.log(res[0]+" cobra "+res[1]+'$');
    }
    catch(err){
        console.log(err);
    }
    
}

DameSalario('3');

//Nivel 3 control de errores con catch

DameSalario('2')
.then((res) => console.log(res[0]+" cobra "+res[1]+'$'))
.catch((err) => console.log("Error:"+err));



