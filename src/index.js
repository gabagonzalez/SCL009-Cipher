  /*audio*/
  let audio = document.getElementById("audio");
  /*innerHTML con addEventListener*/
  document.getElementById("cifrarBtn").addEventListener("click", () => {
  const toEncode = document.getElementById("textArea1").value.toUpperCase();
  /*Guardo en una variable el texto ingresados*/
  const offSet = parseInt(document.getElementById("inputOffSet").value);
  /*Guardo en una variable el elemento offset*/
  let result = window.cipher.encode(toEncode,offSet)
  document.getElementById("textArea2").innerHTML = result;
  });
  document.getElementById("descifrarBtn").addEventListener("click", () => {
  const toDecode = document.getElementById("textArea1").value.toUpperCase();
  /*Guardo en una variable el texto ingresados*/
  const offSet = parseInt(document.getElementById("inputOffSet").value);
  /*Guardo en una variable el elemento offset*/
  let result = src/cipher.js(cipher.decode(toDecode,offSet))
  document.getElementById("textArea2").innerHTML = result;
});
document.getElementById("resetbtn").addEventListener("click", () => {
  document.getElementById("textArea1").value = "";
  document.getElementById("inputOffSet").value = "";
  document.getElementById("textArea2").value = "";
});
/*const ulText = document.getElementById("list")
Guardo en una variable el elemento li (elemento madre)traido desde HTML 
ulText.appendChild(litext);Mi elemento hijo vacio mientras.ulText.innerHTML += <li class="texto"> ${output[i] } </li>
Le digo que se imprima en la etiqueta ul 
y que por cada iteración agregue un li
let name;
Trae el texto contenido en nuestra caja de texto
document.getElementById("principal").style.display = "none";
document.getElementById("formulario").style.display = "block";
función que se ejecuta al presionar el botón enviar
name = document.getElementById("boxName").value;
prompt = "Hola " + name + " Comencemos a Cifrar!! ";
reasigna title concatenando el nombre ingresado
console.log(text);
console.log(text[i]);*/
