const optenerInformacuin = (materia)=>{
    materias = {
        ficica:["perez","juan","pedro","pepe","cofla"],
        programacion:["dalto","juan","pedro","pepe","cofla","maria"], 
        logica:["Hernandes","juan","pedro","pepe","cofla","maria"],
        quimica:["rodriges","juan","pedro","pepe","cofla","maria"]
    }
    
    
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias]; 
    } else {
        return materias;

    }
}

 const mostrarinformacion = (materia)=>{
let informacion = optenerInformacuin(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
     alumnos = informacion[0];
     alumnos.shift();
    document.write(`alumnos presentes en ${informacion[1]}</b>:<b style="color:red">${profesor}</b><br>
        los alumnos son:<b style="color:blue">${alumnos}</b><br><br>`);
} 
 }
 const cantidadDeClases = (alumno)=>{
    let informacion = optenerInformacuin();
    let clasesPresentes =[];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push("" + info )
        }
 }
 return` <b style="color:red">${alumno}</b> esta en <b>${cantidadTotal}</b><br>Esta cursando las clases:<b>${clasesPresentes}</b><br><br>`
 }
mostrarinformacion("ficica");
mostrarinformacion("programacion");
mostrarinformacion("logica");
mostrarinformacion("quimica"); 

document.write(cantidadDeClases("cofla"))

document.write(cantidadDeClases("maria"))