//audio
let audio = document.getElementById("audio");
audio.play();

let name;
function goPressed() {
  //función que se ejecuta al presionar el botón enviar
  name = document.getElementById("boxName").value;
  //Trae el texto contenido en nuestra caja de texto^
  document.getElementById("principal").style.display = "none";
  document.getElementById("formulario").style.display = "block";
  //trae los elementos por su id, "sacando" el principal y mostrando formulario
  prompt = "Hola " + name + " Aquí escribe tu mensaje ";
  //reasigna title concatenando el nombre ingresado//
}
