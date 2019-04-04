window.cipher = {
  encode(offset,text){
    let output = '';  
    let ascii = '';
    for (let i = 0; i< text.length; i++){
    acsii = text[i].charCodeAt(0);
    console.log(ascii);
    /*en código acsii*/  
    let letter;
    if (acsii  >=65 && acsii<= 90){
    letter = String.fromCharCode((acsii- 65 + offset)%26 + 65);
    /*de la A-Z*/
    }else if (97 >= acsii&& acsii<= 122){
    letter = String.fromCharCode((acsii- 97 + offset)%26 + 97);
    /*de la a-z*/
    }/*else{
    letter = String.fromCharCode(acsii);
    }*/
      output += letter
    }
    return output;
  },
    decode(offset,text){
    let output = '';  
    let ascii = '';
    for (let i = 0; i< text.length; i++){
    acsii = text[i].charCodeAt(0);
    console.log(ascii);
    /*en código acsii*/  
    let letter;
    if (acsii  >=65 && acsii<= 90){
    letter = String.fromCharCode((acsii+ 65 - offset)%26 + 65);
    /*de la A-Z*/
    }else if (97 >= acsii&& acsii<= 122){
    letter = String.fromCharCode((acsii+ 97 - offset)%26 + 97);
    /*de la a-z*/
    }/*else{
    letter = String.fromCharCode(acsii);
    }*/
      output += letter
    }
    return output;
  },
};