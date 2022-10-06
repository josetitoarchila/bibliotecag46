/*let resultado;
function Sumar(){
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    resultado = numero1+numero2;
    
    var parrafo1=document.getElementsByTagName("p");
    parrafo1[2].innerHTML="La suma es "+resultado;
}*/


function cancelar2(){
    

}


function operaciones_matematicas(){
    
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    if(numero1==''){
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
        var parrafo1 = document.getElementById("parrafo_validar_numero1");
        parrafo1.innerHTML = "Campo numero 1 es obligatorio";

        document.getElementById("parrafo_validar_numero1").setAttribute("class", "text-danger");

    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        var parrafo1 = document.getElementById("parrafo_validar_numero1");
        parrafo1.innerHTML = "";

    }


    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        var parrafo2 = document.getElementById("parrafo_validar_numero2");
        parrafo2.innerHTML = "Campo numero 2 es obligatorio";

        document.getElementById("parrafo_validar_numero2").setAttribute("class", "text-danger");

    }else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        var parrafo2 = document.getElementById("parrafo_validar_numero2");
        parrafo2.innerHTML = "";

    }
    if((numero1!='')&&(numero2!=''))
    {
        document.getElementById('calculadora').setAttribute("class", "btn btn-outline-primary");
        document.getElementById('calculadora').setAttribute("value", "guardo correctamente");
        document.getElementById('calculadora').setAttribute("disabled", "");

        document.getElementById('cancelar').setAttribute("class", "btn btn-outline-primary");
        document.getElementById('cancelar').setAttribute("value", "guardo correctamente");
        document.getElementById('cancelar').setAttribute("disabled", "");


        numero1=parseInt(numero1);
        numero2=parseInt(numero2);

        /*var etiquetanueva = document.createElement("h1");

        var textnode = document.createTextNode("prueba");
        etiquetanueva.appendChild(textnode);
        
        document.getElementById("caja-uno").appendChild("etiquetanueva");*/



        /*var p = document.createElement("p");
        document.body.appendChild(p);*/

        sumar(numero1, numero2);
        restar(numero1, numero2);
        multiplicar(numero1, numero2);

    }

}

function sumar(numero1, numero2){
    let resultado = numero1 + numero2;
    var cajasumar = document.getElementById("caja_sumar"); 
    cajasumar.innerHTML="La sumatoria es "+resultado;
}
function restar(numero1, numero2){
    let resultado = numero1 - numero2;
    var cajarestar = document.getElementById("caja_restar"); 
    cajarestar.innerHTML="La resta es "+resultado;

}

function multiplicar(numero1, numero2){
    let resultado = numero1 * numero2;
    var cajamultiplicar = document.getElementById("caja_multiplicar"); 
    cajamultiplicar.innerHTML="La multipliacacion es "+resultado;
}

/*var elemento_crear=document.createElement("h1");
var elemento_texto =document.createTextNode("titulo");
elemento_crear.appendChild(elemento_texto);
var actual=document.getElementById("caja-uno");*/

/*document.body.insertBefore(elemento_crear, actual);*/
/*actual.appendChild(elemento_crear);*/


/*var table = document.getElementById("tabla");
var tableAttrs = table.attributes; // Node/interfaz Element
for (var i = 0; i < tableAttrs.length; i++) {
    alert("entro al for"+tableAttrs[i].nodeName);
  // interfaz HTMLTableElement: atributo border
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    alert("entra al if");

    table.border = "1";
}
// interfaz HTMLTableElement: atributo summary
table.summary = "nota: borde aumentado";
*/

var newDiv = document.createElement("div");
var newContent = document.createTextNode("hola mundo 2 div");
newDiv.appendChild(newContent); //añade texto al div creado.

var currentDiv = document.getElementById("caja-uno");
  document.body.insertBefore(newDiv, currentDiv);
  
  
  
  

var elemento_crear =document.createElement("h1");
var texto_titulo = document.createTextNode("TITULO DE EJEMPLO");
elemento_crear.appendChild(texto_titulo);
elemento_crear.setAttribute("class", "text-danger centrar");

var elemento_crear2 =document.createElement("h2");
var texto_titulo2 = document.createTextNode("TITULO DE EJEMPLO 2");
elemento_crear2.appendChild(texto_titulo2);
elemento_crear2.setAttribute("class", "text-danger centrar");


var caja_llenar = document.getElementById("caja-uno");

caja_llenar.appendChild(elemento_crear);
caja_llenar.appendChild(elemento_crear2);


/*caja_llenar.innerHTML=`<h2>NUEVO TITULO</h2>`;*/








