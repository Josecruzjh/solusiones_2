let flase = false;
const validarCilente =(time)=>{
    let edad = prompt("¿cual es tu edad?");
    if (edad > 18){
        if(time>= 2 && time < 7 && free == flase){
            alert("puedes pasar grtis por que eres la primera persona despuede las 2 AM");
            free =true;
        }else{
              alert( `son las ${time}:00Hs y puedes pasar ,pero tienes que pagar la entrada`);
        }
    }else{
        alert("mira papu,eres menor de edad por ende no vas a pasar,maquinola")

    }
    
}
validarCilente(23);
validarCilente(24);
validarCilente(0.2);
validarCilente(0.6);
validarCilente(1);
validarCilente(2);
validarCilente(2.4);
validarCilente(3);