const contenedor = document.querySelector(".flex-container");

//document.querySelector("send-button").value = "COMPRAR"
const boton = document.querySelector(".send-button")
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlave(nombre,modelo,precio){
    // img ="<img class='llave-img' src=png 'llave.png'>";
    img ="<img class='llave-img'src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden =(number)=>{
    document.querySelector(".key-data").value = number

}

let documentFragment = document.createDocumentFragment();

    for (var i = 0; i <=  20; i++ ){
        let modeloRandom = Math.round (Math.random()*10000);
        let precioRandom = Math.round (Math.random()*10+30);
        let llave =crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,`precio ${precioRandom}`);
        let div = document.createElement("DIV");
        div.addEventListener("click",()=>{
            document.querySelector(".key-data").value = number


        })
        div.tabIndex =1;
        div.classList.add('${i}',"flex-item");
        div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
        documentFragment.appendChild(div);
       
       
        // contenedor.innerHTML += div;
}

contenedor.appendChild(documentFragment);

// const llave = crearLlave("Llave1","modelo X","33");


// contenedor.innerHTML = llave[0] + llave[1] + llave[2];
