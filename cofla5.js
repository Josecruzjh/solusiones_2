class Celular{//clse con constructor
    constructor(color,peso,tamaño,rdc,ram){// parametros
        this.color = color;//opjetos 
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara=rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    
    }
    //metodos
    precionarBotonEncendido(){
       if (this.encendido == false){
        alert("celular prendido");
        this.encendido = true;
        } else {
            alert("celular esta apagado")
            this.encendido = false;
        }
    }

    reiniciar(){
     if(this.encendido == true){
        alert("reiniciando el celular")//funcionalidades
     }else{
        alert("el celular esta apagado")
     }
    }
    tomarFotos(){
        alert(`foto tmada en una resolucion de : ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`gravando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
    return` 
    color :<b>${this.color}</b></b>
    Peso: :<b>${this.peso}</b></b>
    Tamaño:<b>${this.tamaño}</b></b>
    Resolucion de Video:<b>${this.resolucionDeCamara}</b></b>
    memoria Ram:<b>${this.memoriaRam}</b></b>
    `;
    }
}
class CelularAltaGama extends Celular{

constructor(color,peso,tamaño,rdc,ram,rdce){// parametros
    super(color,peso,tamaño,rdc,ram)
this.resolucionDeCamaraExtra = rdce;
}
grabarVideoLento(){
    alert("estas grabando en camara lenta");
}
reconocimientoFacial(){
    alert("vamos a inicialicar un reconocimiento Facial");
}
infoAltaGama(){
    return this.mobileInfo() +`Resolucion de Camara Extra:${this.resolucionDeCamaraExtra}`;
}
}

//cualidades
//

/* celular1 = new Celular("rojo","150g","5","full", "hd","2GB");
celular2 = new Celular("negro","150g","5","full", "hd","2GB");
celular3 = new Celular("blanco","150g","5","full","hd","2GB");
 */
/* celular1.precionarBotonEncendido();
celular1.tomarFotos();
celular1.rabarVideo();
celular1.reiniciar();
celular1.precionarBotonEncendido();
 */
/* 
celular1.mobileInfo();
celular2.mobileInfo();
celular3.mobileInfo(); */
// /*document.write(${celular1.mobileInfo()}<br>
//                  ${celular2.mobileInfo()}<br>
//                  ${celular3.mobileInfo()}<br>
// ); 


celular1 = new CelularAltaGama("rojo","150g","5.2","4k", "3gb","full hd");
celular2 = new CelularAltaGama("rojo","150g","5.2","4k", "4gb","hd");


document.write(` 
    ${celular1.infoAltaGama()}<br>
    ${celular2.infoAltaGama()}<br>
`);



