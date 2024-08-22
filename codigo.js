dineroCofla = prompt("cuanto dinero tienes cofla");
dineroRoberto = prompt("cuanto dinero tienes roberto");
dineroPedro = prompt("cuanto dinero tienes pedro");


dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
     alert("Cofla,comprate el elado de agua");
     alert("y te sobra" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla,comprate el elado de crema");
    alert("y te sobra" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla,comprate el elado de heladiux");
    alert("y te sobra" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla,comprate el elado de eladovich");
    alert("y te sobra" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla,comprate el elado de elado");
    alert("y te sobra" + (dineroCofla - 1.8));
}


else if (dineroCofla >= 2.9){
    alert("Cofla,comprate el elado confites o pote de 1/4kg")
    alert("y te sobra" + (dineroCofla - 2.9));
}else{
    alert("lo siento Cofla ,no te alcanza para ningun helado")
}

//
if (dineroRoberto >= 0.6 && dineroRoberto< 1){
    alert("Roberto;comprate el elado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
   alert("Roberto;comprate el elado de crema")

}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
   alert("roberto;comprate el elado de heladiux")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
   alert("roberto,comprate el elado de eladovich")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
   alert("roberto;comprate el elado de elado")
}

else if (dineroRoberto >= 2.9){
   alert("roberto;comprate el elado confites o pote de 1/4kg")

}else{
   alert("lo siento roberto,no te alcanza para ningun helado")
}
//
if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro;comprate el elado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
   alert("Pedro;comprate el elado de crema")

}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
   alert("Pedro;comprate el elado de heladiux")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
   alert("Pedro;comprate el elado de eladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro< 2.9){
   alert("Pedro;comprate el elado de elado")
}

else if (dineroPedro >= 2.9){
   alert("Pedro;comprate el elado confites o pote de 1/4kg")

}else{
   alert("Pedro;lo siento ,no te alcanza para ningun helado")
}