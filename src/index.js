//audio /document.getElementById("audio").value;
//function myFunction() {
//var x = document.getElementById("audio").autoplay;
//document.getElementById("demo").innerHTML = x;
//}
//let name;
//function namePressed() {
//name = document.getElementById("boxName").value;
//document.getElementById("comencemos").style.display = "none";
//document.getElementById("cifrar").style.display = "block";
//let title = document.getElementById("instruccion");
//title.innerHTML = "¡¡ " + name + " estas son las Instrucciones..!!";
//}
  let containerResult = document.getElementById('container');
  
document.getElementById("btnCifrar").addEventListener("click", () => {
  let toEncode= document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,toEncode);
  if (toEncode != ""){
  }
  else{
  alert("Faltan Datos :(")
  }
  });
document.getElementById("btnDescifrar").addEventListener("click", () => {
  let toDecode = document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.decode(offset,toDecode);
  //if (toDecode != ""){
  //}
  //else{
  //alert("Faltan Datos :(")
  //}
});
document.getElementById("resetbtn").addEventListener("click", () => {
  document.getElementById("message").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("container").value = "";

});

