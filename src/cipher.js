  window.cipher = {    
  encode: (offset, toEncode) => { 
    let result1 = '';
    //let codAscii = '';
    for(let i = 0; i< toEncode.length; i++){
    let toAscii = toEncode.charCodeAt(i);
    console.log(toAscii);
    if (toAscii>=65 && toAscii<=90){
    toUnicode = String.fromCharCode((toAscii- 65 + offset)%26 + 65);
    result1 += toUnicode;
    // /*de la A-Z*/
    }
    
  }
  return result1;
  }
}
  /*decode: (offset,toDecode) => {
  let toDecode = '';  
  let codAscii = '';
  let result2 = '';
  if (toDecode == "" || offset == "") {
  alert("Falta datos!!");
  }for (let i = 0; i< toDecode.length; i++){
  codAscii = toDecode.charCodeAt(i);
  en código acsii
  if (toAscii  >=65 && toAscii<= 90){
  toDecode = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
  result2 += toDecode;
  /*de la A-Z
  }
  return result2;

  };*/

    /*if (toAscii === 165){
  cifrado = String.fromCharCode(codAscii);
  descifrado += cifrado;
  console.log(cifrado)
  Ñ*/
  /*else if (toAscii === 32){
  codAscii = (toAscii- 32 + offset)%1 + 32);
  ((espacio))
  /*toEncode  = String.fromCharCode(codAscii);
  result += toEncode;
  console.log(descifrado)

  }else if (97 >= acsii&& acsii<= 122){
  toEncode  = String.fromCharCode((codAscii- 97 + offset)%26 + 97);
  --de la a-z

  }else{
  toEncode = String.fromCharCode(acsii);

  --
  else if(toAscii === 32){
    codAscii = (toAscii + 32 - offset) % 1 + 32;
    descifrado = String.fromCharCode(codAscii);
    descifrado += cifrado;
  /*else if (97 >= toAscii&& toAscii<= 122){
  descifrado = String.fromCharCode((toAscii+ 97 - offset)%26 + 97);
  de la a-z
  }else{
  letter = String.fromCharCode(acsii);
  
}
}
  }*/