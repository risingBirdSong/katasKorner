interface grid {
    vertical : number;
    north: string[];
    south: string[];
    horizontal : number
    east : string[];
    west : string[];
}

function dirReduc(arr: string[]) {
    const lookup: grid = {
        vertical : 0,
        north: [],
        south: [],
        horizontal : 0,
        east : [],
        west : []
    };
    arr.forEach((val) => {
        switch (val) {
            case "NORTH":
                lookup.north.push("NORTH"); lookup.vertical ++; break;
            case "SOUTH":
                lookup.south.push("SOUTH"); lookup.vertical --;  break;
            case "WEST":
                lookup.west.push("WEST"); lookup.horizontal --; break;
            case "EAST":
                lookup.east.push("EAST"); lookup.horizontal ++; break;
        }
    })
 
    //TODO - implement the vertical portion
    if (lookup.north.length < lookup.south.length){
        for (let i = 0; i <= lookup.north.length; i ++){
            lookup.north.shift();
            lookup.south.shift();
        }
    }

    else if (lookup.south.length <= lookup.north.length){
        for (let i = 0; i <= lookup.south.length; i ++){
            lookup.north.shift();
            lookup.south.shift();
        }
    }

    if (lookup.east.length < lookup.west.length){
        // find the shorest
       for (let i = 0; i <= lookup.east.length; i ++) {
        lookup.east.shift();
        lookup.west.shift();
       }
    }

    else if (lookup.west.length <= lookup.east.length){
        for (let i = 0; i <= lookup.west.length; i ++) {
            lookup.east.shift();
            lookup.west.shift();
           }
    }

    let output : string[] = [];
    Object.values(lookup).forEach(val => {
        if (val instanceof Array){
           val.forEach(innerval =>{
               output.push(innerval);
           })
        }
    })
    return output; //?
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
