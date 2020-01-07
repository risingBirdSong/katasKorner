function tribonacci(signature : number[],n : number) : number[]{

    if (n < 3){
        return signature.slice(0,n)
    }
    if (n == 3) {
        return signature;
    }
    signature.push(signature.slice(signature.length-3).reduce((acc,cur) => acc + cur));
    return tribonacci(signature, --n);
    //  return tribonacci(, n--)      
}

tribonacci([1,1,1], 10); //?
