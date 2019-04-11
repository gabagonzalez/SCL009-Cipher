window.cipher = {    
  encode: (offset, toEncode) => { 
    let result1 = '';
    let toUnicode='';
    let toUnicode1='';
    let toUnicode2='';
    //let toUnicode3='';
    for(let i = 0; i< toEncode.length; i++){
    let toAscii = toEncode.charCodeAt(i);
    //console.log(toAscii);
    if (toAscii>=65 && toAscii<=90){
    toUnicode = String.fromCharCode((toAscii- 65 + offset)%26 + 65);
    result1 += toUnicode;
    }else if (toAscii === 32){
    toAscii = ((toAscii- 32 + offset)%1 + 32);
    toUnicode1  = String.fromCharCode(toAscii);
    result1 += toUnicode1;
    }else if (toAscii>=97 && toAscii<=122){
    toUnicode2 = String.fromCharCode((toAscii- 97 + offset)%26 + 97);
    result1 += toUnicode2;
    //de la a-z
    //}else if (toAscii === 165){
    //toAscii = ((toAscii- 165 + offset)%1 + 165);
    //toUnicode3 = String.fromCharCode(toAscii);
    //result1 += toUnicode3;
    //letra Ñ
    }
  }
  //console.log(result1);
  return result1;
  },
  decode: (offset, toDecode) => { 
    let result2 = '';
    let toUnicode6='';
    let toUnicode7='';
    let toUnicode8='';
    //let toUnicode9='';
    for(let i = 0; i< toDecode.length; i++){
    let toAscii = toDecode.charCodeAt(i);
    //console.log(toAscii);
    if (toAscii>=65 && toAscii<=90){
    toUnicode6 = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
    result2 += toUnicode6;
    }else if (toAscii === 32){
    toAscii = ((toAscii+ 32 - offset-1)%1 + 32);
    toUnicode7 = String.fromCharCode(toAscii);
    result2 += toUnicode7;
    }else if (toAscii>=97 && toAscii<= 122){
    toUnicode8 = String.fromCharCode((toAscii+ 97 - offset-26)%26 + 97);
    result2 += toUnicode8;
    //de la a-zs
    //}else if (toAscii === 165){
    //toAscii = ((toAscii- 165 + offset)%1 + 165);
    //toUnicode9 = String.fromCharCode(toAscii);
    //result2 += toUnicode9;
    //letra Ñ
    }
  }
  //console.log(result2);
  return result2;
  }
};
  