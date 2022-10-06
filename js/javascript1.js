//alert("javascript en un documento aparte");
/*voy a crear ejemplos c                                                                                                                                                        on variables*/
var nombre = "Carlos", promedio=4.8, edad =15;

/*var numero1 =prompt("Ingrese numero 1");
var numero2 =prompt("Ingrese numero 2");
var resultado = parseInt(numero1) + parseInt(numero2);*/
/*momentaneo document.write*/
/*document.write("<h3 class='estilo_h3'>El resultado es : "+resultado+"</h3>");*/

document.write("</ br></ br></ br></ br></ br>");

var materias =["Fisica", "Matematicas", 4.8, false];
materias[materias.length]="EF";
materias.push(5, "IDIOMAS");

document.write("<div class='caja_arreglo'>");
document.write("<p>"+materias[0]+"</p>");
document.write("<p>"+materias[1]+"</p>");
document.write("<p>"+materias[2]+"</p>");
document.write("<p>"+materias[3]+"</p>");
document.write("<p>"+materias[4]+"</p>");
document.write("<p>"+materias[5]+"</p>");
document.write("<p>"+materias[6]+"</p>");
document.write("<p>"+materias[7]+"</p>");
document.write("</div>");


console.log(materias.join(":"));
document.write("<p class='fs-5 text-center text-uppercase estilo1'>"+materias.join(":")+"</p>");
document.write("<p class='fs-5 text-center text-uppercase estilo1'>"+materias.sort()+"</p>");

/*var edad =prompt("Ingrese edad");
edad = parseInt(edad);
if(edad<18){
    alert("es menor de edad");
}else if((edad>18)&&(edad<70)){
    alert("es mayor de edad");
}else{
    alert("es tercera edad");
}*/

//const fruta="Papaya";
/*var fruta=prompt("Ingrese fruta");
switch(fruta){
    case 'Peras':
        document.write("<p class='fs-5 text-center text-uppercase estilo1'> el precio de las peras es 5000</p>");
        break;
    case 'Manzanas':
        document.write("<p class='fs-5 text-center text-uppercase estilo1'> el precio de las manzanas es 3000</p>");
        break;
    case 'Papaya':
        document.write("<p class='fs-5 text-center text-uppercase estilo1'> el precio de la papaya es 8000</p>");
        break;
    default:
        document.write("<p class='fs-5 text-center text-uppercase estilo1'>la fruta "+fruta+"no esta definida</p>");
        

}*/
//variable de tipo global tabla
var tabla =prompt("Ingrese tabla de multiplicar");
tabla = parseInt(tabla);

for(let i=1; i<=10; i++){

    //variable de tipo local
    var multiplicar=i*tabla;
    document.write("<p class='fs-5 text-center text-uppercase estilo1'>" + i +" por "+ tabla + " es " +multiplicar+"</p>");

}


let j=2;
while(j<10){
    
    
    document.write("<p class='fs-5 text-center text-uppercase estilo1'> la jota va en" + j +"</p>");
    j++;
}

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
  document.write("<p class='fs-5 text-center text-uppercase estilo1'>resultado del do while" + result +"</p>");
} while (i < 5);






/*multiplicar();*/
function multiplicar(){
    alert("entro a multiplicar");
    resultado = numero1 * numero2;
    document.write("<p>la multiplicacion  es "+resultado+"</p>");
    console.log("la multiplicacion  es "+resultado);

}




