window.cipher = {    
  encode: (offset, toEncode) => { 
    let result1 = '';
    let toUnicode='';
    let toUnicode1='';
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

    }
  }

  return result1;
  },
  decode: (offset, toDecode) => { 
    let result2 = '';
    let toUnicode6='';
    let toUnicode7='';
    for(let i = 0; i< toDecode.length; i++){
    let toAscii = toDecode.charCodeAt(i);
    if (toAscii>=65 && toAscii<=90){
    toUnicode6 = String.fromCharCode((toAscii+ 65 - offset-26)%26 + 65);
    result2 += toUnicode6;
    }else if (toAscii === 32){
    toAscii = ((toAscii+ 32 - offset-1)%1 + 32);
    toUnicode7  = String.fromCharCode(toAscii);
    result2 += toUnicode7;
    
    }
  }
  
  return result2;
  }
};
  