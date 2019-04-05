window.cipher = {    
  encode: (toEncode,offSet) => {
  let codAscii = ''; 
  let cifrado;
  let fin = '';
  if (toEncode == "" || offSet == "") {
  alert("Falta datos!!");
  for (let i = 0; i<= toEncode.length; i++){
  let toAscii = toEncode.charCodeAt(i);
  /*en código acsii*/  
  /*if (toAscii === 165){
  cifrado = String.fromCharCode(codAscii);
  descifrado += cifrado;
  console.log(cifrado)
  Ñ*/
  }
  if (toAscii  >=65 && toAscii<= 90){
  cifrado = String.fromCharCode((codAscii- 65 + offSet)%26 + 65);
  descifrado += cifrado;
  /*de la A-Z*/
  }/*else if (toAscii === 32){
  codAscii = (toAscii- 32 + offSet)%1 + 32);
  ((espacio))  
  cifrado = String.fromCharCode(codAscii);
  descifrado += cifrado;
  console.log(descifrado)
  }else if (97 >= acsii&& acsii<= 122){
  cifrado = String.fromCharCode((codAscii- 97 + offSet)%26 + 97);
  --de la a-z
  }/*else{
  cifrado = String.fromCharCode(acsii);
  }*/
  }
  return cifrado;
  },
  decode: (toDecode, offSet) => {
  let descifrado = '';  
  let codAscii = '';
  let fin2 = '';
  if (toDecode == "" || offSet == "") {
  alert("Falta datos!!");
  }for (let i = 0; i< toDecode.length; i++){
  codAscii = toDecode.charCodeAt(i);
  /*en código acsii*/  
  if (toAscii  >=65 && toAscii<= 90){
  descifrado = String.fromCharCode((toAscii+ 65 - offSet)%26 + 65);
  descifrado += descifrado;
  /*de la A-Z*/
  }else if(toAscii === 32){
    codAscii = (toAscii + 32 - offSet) % 1 + 32;
    descifrado = String.fromCharCode(codAscii);
    descifrado += cifrado;
  /*else if (97 >= toAscii&& toAscii<= 122){
  descifrado = String.fromCharCode((toAscii+ 97 - offSet)%26 + 97);
  de la a-z
  }else{
  letter = String.fromCharCode(acsii);
  */
  }
  }
  descifrado += cifrado;
  }
  return descifrado;
  };
