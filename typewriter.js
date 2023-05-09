const sentence = function(dataString) {
  for (let char = 0; char < dataString.length; char++) {
    if (char <= dataString.length) {
      setTimeout(() => {
        console.log(dataString.charAt(char));
      }, char * 100);
    }
  }
};

const endNote = function(newString) {
  setTimeout(() => {
    console.log(newString);
  }, 5000);
};

sentence("hello there from lighthouse labs");
endNote("Sentence has printed.");