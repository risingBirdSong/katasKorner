function digital_root (n : number) : number {
    if (GetDigits(n) === 1){
        return n;
    }

    else if (GetDigits(n) > 1){
        return digital_root(splitNum(n).reduce((acc, cur) => acc + cur));
    }
    else return 0;
}

digital_root(493193); //?


function GetDigits (n : number) {
    if (n <= 0){
        return new Error("please pass a number greater than zero");
    }
    else return Math.floor(Math.log10(n)) + 1;
}

function splitNum (num : number) : number[] {
    return num.toString().split("").map(Number);
}
