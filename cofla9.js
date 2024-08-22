let materias = {
    ficica:["perez","juan","pedro","pepe","cofla"],
    programacion:["dalto","juan","pedro","pepe","cofla","maria"], 
    logica:["Hernandes","juan","pedro","pepe","cofla","maria"],
    quimica:["rodriges","juan","pedro","pepe","cofla","maria"]
}
const incribir = (alumno,materia)=>{
    personas  = materias[materia];
    personas = personas;
    if (personas.length >= 21){
        document.write(`lo siento ${alumno},las clases de ${materia} ya estan llenas <br><br>`);
    }else{
        personas.push(alumno);
        if (materia == "ficica"){
         materias = {
            ficica: personas,
            programacion:materias["programacion"], 
            logica:materias["logica"],
            quimica:materias["quimica"]
        }
    }
    else if (materia == "programacion"){
            materias = {
            ficica: materias["ficica"],
            programacion:personas, 
            logica:materias["logica"],
            quimica:materias["quimica"]
        }
    }else if (materia == "logica"){
            materias = {
            ficica: materias["ficica"],
            programacion:materia["programacion"], 
            logica:personas,
            quimica:materias["quimica"]
        }
    }else if (materia == " quimica"){
         materias = {
            ficica: materias["ficica"],
            programacion:materia["programacion"], 
            logica:materias["logica"],
            quimica:personas 
        }
    }
    document.write(`¡felizidaes!${alumno}! te as incrito a ${materia}correctamente.`);

}
}

document.write(materias["ficica"] + "</br>")
incribir("pedrito","ficica");
incribir("juan ","ficica");
incribir("pepe","ficica");
incribir("alan","ficica");
incribir("cuco","ficica");
incribir("pedrito","ficica");
incribir("juan ","ficica");
incribir("pepe","ficica");
incribir("alan","ficica");
incribir("cuco","ficica");
incribir("pedrito","ficica");
incribir("juan ","ficica");
incribir("pepe","ficica");
incribir("alan","ficica");
incribir("cuco","ficica");
incribir("pedrito","ficica");
incribir("juan ","ficica");
incribir("pepe","ficica");
incribir("alan","ficica");
incribir("cuco","ficica");
incribir("pedrito","ficica");
incribir("juan ","ficica");
incribir("pepe","ficica");
incribir("alan","ficica");
incribir("cuco","ficica");
document.write("</br>" + materias["ficica"])