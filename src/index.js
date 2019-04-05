  /*audio
  let audio = document.getElementById("audio");
  innerHTML con addEventListener
  1-Guardo en una variable el texto ingresados
  Guardo en una variable el elemento offset
  let result = window.cipher.encode(toEncode,offset)
  document.getElementById("containerResult").innerHTML = result;
  2-Guardo en una variable el texto ingresados
  Guardo en una variable el elemento offset
  let result = src/cipher.js(cipher.decode(toDecode,offset))
  document.getElementById("textArea2").innerHTML = result;*/
  let containerResult = document.getElementById('container');
  
document.getElementById("btnCifrar").addEventListener("click", () => {
  let toEncode= document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,toEncode);
  // if (toEncode != ""){
    
  // }
  // else{
  //   alert("No hay texto")
  // }
  });
document.getElementById("btnDescifrar").addEventListener("click", () => {
  const toDecode = document.getElementById("message").value.toUpperCase();
  const offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.decode(offset,toDecode);
});
document.getElementById("resetbtn").addEventListener("click", () => {
  document.getElementById("message").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("containerResult").value = "";

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
