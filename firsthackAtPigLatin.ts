//could be refactored to be cleaner

function pigIt(str : string){
    let rege = /^[a-zA-Z]+$/;
   return str.split(" ").map((val) => {
        if (val.length > 1 && rege.test(val)){
            let firstLetter = val.slice(0,1); 
            let strippedWord = val.slice(1); 
            return `${strippedWord}${firstLetter}ay`;
        }
        else if (val.length == 1 && rege.test(val)) {
            val = `${val}ay`;
            return val;
        }
        else {
            return val;
        }
   }).join(" ")
  }

  pigIt("Hello World O !"); 
