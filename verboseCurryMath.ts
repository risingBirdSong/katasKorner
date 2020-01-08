

function zero(func? : Function) {
    if (func){
    return func(0);
    }
    return 0;
}


function one(func? : Function) {
    if (func){
      return  func(1) //?
    }
    return 1;
}


function two(func? : Function) {
    if (func){
        return func(2);
    }
    return 2;
}



function three(func? : Function) {
    if (func){
        return func(3);
    }
    return 3;
}

function four(func? : Function) {
    if (func){
        return func(4)
    }
    return 4;
}

function five(func? : Function) {
    if (func){
        return func(5)
    }
    return 5;
}
function six(func? : Function) {
    if (func){
        return func(6)
    }
    return 6;
}
function seven(func? : Function) {
    if (func){
        return func(7)
    }
    return 7;
}

function eight(func? : Function) {
    if (func){
        return func(8)
    }
    return 8;
}
function nine(func? : Function) {
    if (func){
        return func(9)
    }
    return 9;
}

function plus (a : number){
    return function(b : number){
        return b + a;
    }
}

function minus (a : number) {
    return function (b : number){
        return b - a;
    }
}

function times (a : number){
    return function(b : number){
        return b * a;
    }
}

function dividedBy (a : number) {
    return function (b : number){
        return Math.floor(b / a);
    }
}
