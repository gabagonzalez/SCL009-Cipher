window.cipher = {    
  encode: (offset, toEncode) => { 
    let result1 = '';

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
    }//else{
    //result1 += (toEncode);
    //}

  }
  return result1;
  },
  decode: (offset, toDecode) => { 
    let result2 = '';
    //let codAscii = '';
    for(let i = 0; i< toDecode.length; i++){
    let toAscii = toDecode.charCodeAt(i);
    if (toAscii>=65 && toAscii<=90){
    toUnicode2 = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
    result2 += toUnicode2;
    }else if (toAscii === 32){
    toAscii = ((toAscii- 32 + offset)%1 + 32);
    toUnicode3  = String.fromCharCode(toAscii);
    result2 += toUnicode3;
    }//else{
    //result2 += (toDecode);
    //}
  }
  return result2;
  }
};
  