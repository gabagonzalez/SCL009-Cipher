//audio /document.getElementById("audio").value;
//function myFunction() {
//var x = document.getElementById("audio").autoplay;
//document.getElementById("demo").innerHTML = x;
//}

  let containerResult = document.getElementById('container');
  
document.getElementById("btnCifrar").addEventListener("click", () => {
  let toEncode= document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,toEncode);

document.getElementById("btnDescifrar").addEventListener("click", () => {
  let toDecode = document.getElementById("message").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.decode(offset,toDecode);
  
});
document.getElementById("resetbtn").addEventListener("click", () => {
  document.getElementById("message").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("container").value = "";

});
});
