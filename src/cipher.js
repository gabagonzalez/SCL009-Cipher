window.cipher = {
  function encode() {
    encode:(user_offset, user_text) =>{
      let output = '';  
  
      for (let i = 0; i< user_text.length; i++){
      let acsii_letter = user_text.charCodeAt(i);
      /*en código acsii*/  
      let newLetter;
      if (acsii_letter >=65 && acsii_letter <= 90){
      newLetter = String.fromCharCode((acsii_letter - 65 + user_offset)%26 + 65);
      /*de la A-Z*/
      }else if (97 >= acsii_letter && acsii_letter <= 122){
      newLetter = String.fromCharCode((acsii_letter - 97 + user_offset)%26 + 97);
      /*de la a-z*/
      }else{
      newLetter = String.fromCharCode(acsii_letter);
      }
        output += newLetter
      }
      return output;
      }
    };
   
  /*
  function encode()
  decode: () => {
    /* Acá va tu código */
  }
}



};*/
