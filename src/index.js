// audio
let audio = document.getElementById("audio");
audio.play();

// innerHTML con addEventListener
const offset= document.getElementById("offset");
// Guardo en una variable el elemento number que luego ocupare en addEventListener
const ulText = document.getElementById("list")
// Guardo en una variable el elemento li (elemento madre)traido desde HTML 
ulText.appendChild(litext);
// Mi elemento hijo vacio mientras

btnShow.addEventListener('click', () => {
let text = document.getElementById("text").value
let btn = '';
// Guardo en una variable los datos ingresados
let resultado;
for(var i = 0; i < text.length; i++){
//Si boton1 es cifrar 
if ("boton1"){
resultado = cipher.encode();
//window.cipher ,cipher.encode()
}else if ("boton2"){
    resultado = cipher.decode();
// Si boton2 es decifrar
/*

//decifrar 
cipher.decode()window.cipher */
    }
      output += resultado
    }
    return output;
  },  
ulText.innerHTML += <li class="texto"> ${output[i] } </li>
// Le digo que se imprima en la etiqueta ul y que por cada iteración agregue un li
};



// let name;
// Trae el texto contenido en nuestra caja de texto
// document.getElementById("principal").style.display = "none";
// document.getElementById("formulario").style.display = "block";
// función que se ejecuta al presionar el botón enviar
// name = document.getElementById("boxName").value;
// prompt = "Hola " + name + " Comencemos a Cifrar!! ";
// reasigna title concatenando el nombre ingresado
//console.log(text);
//console.log(text[i]);
