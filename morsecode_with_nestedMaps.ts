function decodeMorse(morseCode: string) {
 
    let logic = morseCode.split("   ").map(val => {
        return val.split(" ").map(innerv => {
            //@ts-ignore
            // the reversed is a morse code dictionary
            return reversed[innerv]; //?
        }).join("") //?
    }).join(" ").trim().toUpperCase() //?
}

decodeMorse(".... . -.--   .--- ..- -.. .   ···−−−···"); //?

