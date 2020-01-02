
function points(games: string[]) {
  let ourpoints = 0;
  games.forEach((val) => {
    let split = val.split(":"); //?
    if (split[0] > split[1]) {
      ourpoints += 3
    }
    else if (split[0] == split[1]) {
      ourpoints += 1
    }
  })
  return ourpoints
}

// points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']) //?

//["3:1", "2:2", "0:1", ...]

function diamond(n: number) {
  if (n < 0 || n % 2 == 0) {
    return null;
  }
  let diamondstring = '';
  for (let i = 1; i <= n; i += 2) {
    diamondstring += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
  }
  for (let i = n - 2; i > 0; i -= 2) {
    diamondstring += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
  }
  return diamondstring;
}

// console.log(diamond(11))

type penny = number;
type nickel = number;
type dime = number;
type quarter = number;

const coinCombo = function (cents: number) {
  let change: [penny, nickel, dime, quarter] = [0, 0, 0, 0];
  let quarters, dimes, nickels, pennies;
  if (cents / 25 >= 1) {
    quarters = Math.floor(cents / 25);
    cents -= 25 * quarters;
  }
  if (cents / 10 >= 1) {
    dimes = Math.floor(cents / 10)
    cents -= 10 * dimes;
  }
  if (cents / 5 >= 1) {
    nickels = Math.floor(cents / 5);
    cents -= 5 * nickels;
  }
  return [cents || 0, nickels || 0, dimes || 0, quarters]
}

// coinCombo(56) //?
// return correct change with heighest value coins

// 24 / 25//?

// passed 23 cents... start at the top because want to give the biggest change

// 23 - 25 is negative, so we rule out 25
// 23 - 10 is 13, positive so we know a dime is first change, but we can give two dimes...

// while 23 - dime > 0 dime ++


function enhancedCoin(cents: number) {
  return [25, 10, 5, 1].map((denomination) => {
    let c = Math.floor(cents / denomination);
    cents %= denomination;
    return c;
  }).reverse()
}

// enhancedCoin(96)//?

//  accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s: string) {
  return s.split('').map((letter, idx) => {
    let output = letter.repeat(idx + 1);
    return capitalizeFirstLetter(output);
  }).join('-')
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// accum('ab') //?

// console.log(accum('abcd'))

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s: string) {
  let arrayed = s.split(''); //?
  let index = 0;
  while (index < arrayed.length) {
    arrayed
    if (arrayed[index] == "#") {
      if (index == 0) {
        arrayed.splice(index, 1);
        index = 0;
        continue;
      }
      arrayed.splice(index - 1, 2);
      index = 0;
      continue;
    }

    index++;
  }
  return arrayed.join('');
}

// cleanString("abc#d##c"); //?
// cleanString('###aa'); //?

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A: number[]) {
  //happy coding!
  let record: { [key: number]: number } = {};
  for (let num of A) {
    if (record[num]) {
      record[num]++;
    }
    else {
      record[num] = 1;
    }
  }
  for (let rec in record) {
    record[rec] //?
    if (record[rec] % 2 == 0) {
      delete record[rec];
    }
  }
  return parseInt(Object.keys(record)[0]);
}

// findOdd([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]); //?

// multiples of 3 and 5
function solution(number: number) {
  let sum = 0;
  let num: string | number;
  for (num in [...Array(number).keys()]) {
    num = parseInt(num);
    if (num % 3 == 0 && num % 5 == 0) {
      num //?
      sum += num;
      continue;
    }
    if (num % 3 == 0) {
      num //?
      sum += num;
    }
    if (num % 5 == 0) {
      num //?
      sum += num;
    }

  }
  return sum;
}

// console.log(solution(10))



class Lamp {
  constructor(
    public color: string,
    public on: boolean = false,
  ) { }
  toggleSwitch() {
    this.on = !this.on;
  }
  state() {
    this.on == true ? "the Lamp is on" : "the Lamp is off";
  }
}

function duplicateCount(text: string) {
  text = text.toLowerCase();
  let dict: { [key: string]: number } = {};
  for (let t of text) {
    dict[t] ? dict[t]++ : dict[t] = 1;
  }
  return Object.values(dict).reduce((acc, cur) => {
    if (cur > 1) {
      return acc += 1; //?
    };
    return acc;
  }, 0)
}

// duplicateCount("aaaaaabb1233cc"); //?

function duplicateCounta(text: string) {
  return text
    .toLowerCase()
    .split('')
    .reduce(function (a, l) {
      a[l] = a[l] ? a[l] + 1 : 1;
      if (a[l] === 2) a.count++;
      return a;
    }, { count: 0 }).count;
}

// duplicateCounta("aaabbbeccc") //?

function isValidWalk(walk: string[]) {
  //insert brilliant code here
  let x = 0, y = 0;
  for (let dir of walk) {
    switch (dir) {
      case 'n':
        y++; break;
      case 's':
        y--; break;
      case 'e':
        x++; break;
      case 'w':
        x--; break;
    }
  }
  return x == 0 && y == 0 ? true : false;
}

// isValidWalk(['e', 'w', 's']); //?

function order(words: string) {
  if (words.length == 0) { return "" }
  let a = words.split(" "); //?
  let reg = new RegExp(/[1-9]/);
  // reg.exec(five); //?
  let mapped = a.map(val => {
    return {
      val: val,
      'reg': reg.exec(val)[0]
    }
  });
  let sorted = mapped.sort((a, b) => {
    return parseInt(a.reg) - parseInt(b.reg);
  })

  return sorted.map(val => {
    return val.val
  }).join(" ")
}

// order(""); //?

function findEvenIndexa(arr: number[]) {
  if (arr.length <= 1) { return -1 }
  let leftside = 0;
  let rightside = 0;
  for (let i = 0; i < arr.length; i++) {
    rightside = 0;
    if (arr[i - 1]) {
      leftside += arr[i - 1];
      leftside; //?
    }
    for (let j = i + 1; j < arr.length; j++) {
      rightside += arr[j];
      if (j == arr.length - 1) {
        rightside; //?
      }
      if (leftside == rightside && j == arr.length - 1) {
        return i;
      }
    }
  }
  return -1;
}

// findEvenIndexa([10, -80, 10, 10, 15, 35, 20]) //?

// function findEvenIndex(arr : number[]){
//   let leftIdx = 0, rightIdx = arr.length-1, leftTotal = arr[leftIdx], rightTotal = arr[rightIdx];
//   let finish = false;
//   let counter = 0;
//   while (finish == false && counter < 1000) {
//     counter ++;
//     // [1,100,50,-51,1,1]
//     leftTotal; //?
//     rightTotal; //?
//     leftIdx; //?
//     rightIdx;//?

//     if (leftTotal < rightTotal){
//       leftIdx++;
//       leftTotal += arr[leftIdx];  
//     }
//     else if (leftTotal > rightTotal) {
//       rightIdx--;
//       rightTotal += arr[rightIdx];
//     }
//     if (leftIdx == rightIdx && rightTotal == leftTotal) {
//       counter;//?
//       finish = true;
//       return leftIdx;
//     }
//     else if(leftIdx == rightIdx && rightTotal != leftTotal){
//       return -1;
//     }
//     if (leftTotal == rightTotal) {
//       leftIdx++; rightIdx--;
//       leftTotal+=arr[leftIdx];
//       rightTotal+=arr[rightIdx];
//     }
//   }
//   return 'broke'
// }

// findEvenIndex([1,100,50,-51,1,1]) //?

function findEvenIndex(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let leftTotal = 0, rightTotal = 0; //?
    for (let j = 0; j < arr.length; j++) {

      if (j < i) {
        leftTotal += arr[j];
      }
      else if (j > i) {
        rightTotal += arr[j];
      }
    }
    if (leftTotal == rightTotal) {
      return i;
    }
  }
  return -1;
}

// findEvenIndex([1, 2, 3, 4, 5, 6]) //?


function sequenceClassifier(arr: number[]) {
  //solve for unordered
  let log = {
    up: 0,
    down: 0,
    even: 0
  }

  for (let i = 1; i < arr.length; i++) {

    //unordered
    if (log.up > 0 && log.down > 0) {
      return 0;
    }

    //iterating logic
    if (arr[i - 1] < arr[i]) {
      log.up++;
    }
    else if (arr[i - 1] > arr[i]) {
      log.down++;
    }
    else if (arr[i - 1] == arr[i]) {
      log.even++;
    }
  }
  if (log.down == 0 && log.up == 0) {
    return 5;
  }
  // strictly increasing
  if (log.up > 0 && log.even == 0) {
    return 1;
  }

  else if (log.up > 0 && log.even > 0) {
    return 2;
  }

  else if (log.down > 0 && log.even == 0) {
    return 3;
  }
  else if (log.down > 0 && log.even > 0) {
    return 4;
  }

}

// console.log(sequenceClassifier([9, 8, 8, 11, 7, 6, 4, 3, 1]));

function duplicateEncode(word: string) {
  word = word.toLowerCase()
  let tracker: { [key: string]: number } = {};
  for (let w of word) {
    if (tracker[w] >= 1) {
      tracker[w]++;
    }
    if (!tracker[w]) {
      tracker[w] = 1
    }

  }
  tracker;
  let output = '';
  for (let w of word) {
    if (tracker[w] > 1) {
      output += ')';
    }
    else {
      output += "(";
    }
  }
  return output;
}

// console.log(duplicateEncode("Success"))

function betterBalance(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((a, v) => a + v, 0) === arr.slice(i + 1).reduce((a, v) => a + v, 0)) {
      return i;
    }
  }
  return -1;
}

// console.log(betterBalance([1, 2, 3, 4, 3, 2, 1, 1]));

// function lightBulbs(lights: number[], num: number) {
//   lights = arrayConcat(lights, num);
//   let lightsbools = lights.map(x => x == 0 ? false : true);
//   let output = [];
//   for (let i = 0; i < lightsbools.length; i++) {

//     if (lightsbools[i] == true && i < lightsbools.length - 1) {
//       output.push(!lightsbools[i + 1]);
//     }
//     if (lightsbools[i] == false && i < lightsbools.length - 1) {
//       output.push(lightsbools[i + 1]);
//     }
//     if (i == lightsbools.length - 1 && lightsbools[i] == true) {
//       output.unshift(!lightsbools[0]);
//     }
//     if (i == lightsbools.length - 1 && lightsbools[i] == false) {
//       output.unshift(lightsbools[0]);
//     }
//   }
//   return output;
// }

// console.log(lightBulbs([0, 1, 1, 0, 1, 1], 2));

function arrayConcat(arr: number[], times: number) {
  let output: number[] = [];
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < arr.length; j++) {
      output.push(arr[j]);
    }
  }
  return output;
}
// console.log(arrayConcat([1, 2, 3], 3));


// this is a nieve attempt because its not taking into account actual bills, but instead only totals. 
// bills cant be broken.

function ticketsnieve(peopleInLine: number[]) {
  let till = 0;
  for (let ticket of peopleInLine) {
    if (ticket == 25) {
      till += 25;
    }
    console.log("till", till, "ticket", ticket);
    if (ticket > 25) {
      if (ticket - 25 > till) {
        console.log('huh');
        return "NO";
      }
      else {
        till -= (ticket - 25);
        till += ticket;
      }
    }
  }
  console.log(till);
  return "YES";
}
// console.log(ticketsnieve([25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 25, 100, 50, 25]));

function tickets(peopleInLine: number[]) {
  let till = {
    25: 0,
    50: 0,
    100: 0,
    total: 0
  }
  for (let ticket of peopleInLine) {
    till.total += 25;
    if (ticket == 25) {
      till[25]++;
    }
    if (ticket == 50) {
      till[50]++;
      till[25]--;
    }
    if (ticket == 100) {
      till[100]++;
      if (till[50]) {
        till[50]--;
        till[25]--;
      }
      else {
        till[25] -= 3;
      }
    }
    if (till[25] < 0 || till[50] < 0) {
      return "NO";
    }
  }
  console.log("total", till.total, 'test', peopleInLine.length == till.total / 25);
  return "YES";
}

// tickets([25, 25, 50, 50, 100]); //?


function lightBulbs(lights: number[], n: number) {
  let nextState = [];
  while (n > 0) {
    for (let i = 0; i < lights.length; i++) {
      if (i == lights.length - 1) {
        if (lights[lights.length - 1] == 1) {
          if (lights[0] == 1) {
            nextState[0] = 0;
          }
          else if (lights[0] == 0) {
            nextState[0] = 1;
          }
        }
        else if (lights[lights.length - 1] == 0) {
          nextState[0] = lights[0];
        }
      }
      if (i < lights.length - 1) {
        if (lights[i] == 1) {
          if (lights[i + 1] == 0) {
            nextState[i + 1] = 1
          }
          else if (lights[i + 1] == 1) {
            nextState[i + 1] = 0
          }
        }
        else if (lights[i] == 0) {
          nextState[i + 1] = lights[i + 1];
        }
      }
    }
    console.log(lights);
    lights = nextState;
    nextState = [];
    n--;
  }
  return lights;
}

//[1,1,0,1,1,0]
// lightBulbs([0, 1, 1, 0, 1, 1], 2) //?

//1 0 1 1 0 1 
// lightBulbs([1, 1, 0, 1, 1, 0], 1); //?

// lightBulbs([0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1], 301); //?

// https://www.codewars.com/kata/5a7f58c00025e917f30000f1

// https://www.codewars.com/kata/58f5e53e663082f9aa000060

// const bijectiveBinary = {
//   convertToInt: function (str: string) {
//     // enter your code here
//     let total = 0;
//     let arrayed = str.split("");
//     for (let i = arrayed.length - 1; i >= 0; i--) {
//       // total += (parseInt(i) * Math.pow(i))

//       let nthFromRightIndex = arrayed.length - i; //?
//       let nthFromRightValue = arrayed[i]; //?
//       total += nthFromRightIndex * parseInt(nthFromRightValue);
//       total; //?
//     }
//     return total;
//   },
//   convertFromInt: function (int: number) {
//     // enter your code here
//   }
// };

// bijectiveBinary.convertToInt("111"); //?

// https://www.codewars.com/kata/598106cb34e205e074000031

//https://www.codewars.com/kata/row-of-the-odd-triangle/train/javascript


function lightBulbsRedo(lights: number[], n: number) {
  let mapped = lights;
  while (n--) {
    mapped = mapped.map((val, idx) => {
      return mapped[(idx || mapped.length) - 1] ? 1 - val : val;
    })
  }
  return mapped;
}
console.log(lightBulbsRedo([0, 1, 1, 0, 1, 1], 2))

function lightBulbsRedoAgain(lights: number[], n: number) {
  let mapped = lights;
  while (n--) {
    mapped = mapped.map((val, idx) => {
      return mapped[(idx || mapped.length) - 1] ? 1 - val : val;
    })
  }
  return mapped;
}



// console.log(lightBulbsRedoAgain([0, 1, 1, 0, 1, 1], 2))


function longestnieve(str: string) {
  let streak = 0;
  let stringstreak = ""
  let substreak = 0;
  let substring = "";
  str.split("")
    .forEach((val, idx, arr) => {

      if (idx == arr.length - 1) {
        val;//?
        arr[idx - 1]; //?
        if (val > arr[idx - 1]) {
          substring += val;
          substring; //?
        }
      }

      else {
        if (val < arr[idx + 1]) {
          substreak++;
          substring += val;
        }
        if (substreak > streak) {
          streak = substreak;
          stringstreak = substring;
        }

        if (val > arr[idx + 1]) {
          substreak = 0;
          substring = "";
        }
      }

    })

  return stringstreak;
}



// console.log(longest("asdfaaaabbbbcttavvfffffdf"));
// console.log(longestnieve("abczzzabcdzzzabcdefzabcdefgzzzabcdefghi"));

function longest(str: string) {
  let mapped = str.split("");
  let obj = {} as any;
  let streaked = mapped.map((val, idx, arr) => {
    return val < arr[idx + 1] ? { val, truthy: true } : { val, truthy: false }
  })
  streaked; //?
  let chunked: string[] = [];
  let substring = ""
  for (let i = 0; i < streaked.length; i++) {
    let val = streaked[i];
    if (val.truthy == true) {
      substring += val.val;
    }
    else if (val.truthy == false) {
      chunked.push(substring);
      substring = "";
    }
    if (i == streaked.length - 1 && substring) {
      chunked.push(substring);
    }
  }
  chunked; //?
  let longest = chunked.reduce((a, b) => a.length > b.length ? a : b).length;
  longest; //?
  let filtered = chunked.filter((val) => {
    return val.length >= longest;
  })
  filtered; //?
}

// longest("abcdeapbcdef") //?


function longestagain(str: string) {
  let mapped = str.split("").map((val, idx, arr) => {
    if (idx < arr.length - 1) {
      if (val <= arr[idx + 1]) {
        val //?

        return val;
      }
      else return false;
    }
    else if (idx == arr.length - 1) {
      if (arr[idx] > arr[idx - 1]) {
        return val;
      }
      else return false;
    }
  })
  mapped; //?
  let substring = "";
  let theStrings = [];

  for (let i = 0; i < mapped.length; i++) {
    if (typeof mapped[i] == 'string') {
      substring += mapped[i];
      if (i == mapped.length - 1) {
        theStrings.push(substring);
      }
    }
    if (mapped[i] == false) {
      theStrings.push(substring);
      substring = "";
    }

  }

  let onlyStrings = theStrings.filter(val => val);
  return onlyStrings.reduce((acc, val) => {
    return acc.length > val.length ? acc : val;
  })
}

// longestagain("asdfaaaabbbbcttavvfffffdf");  //?

function longestsimple(str: string) {
  let allStrings = [];
  let substring = "";

  for (let i = 1; i < str.length; i++) {
    if (i == 1) {
      if (str[0] <= str[1]) {
        substring += str[0];
      }
    }
    if (str[i] > str[i - 1]) {
      substring += str[i];
    }
    if (str[i] == str[i - 1]) {
      substring += str[i - 1];
    }
    if (str[i] < str[i - 1]) {
      allStrings.push(substring);
      substring = "";
    }
    if (i == str.length - 1) {
      if (str[i] >= str[i - 1]) {
        substring += str[i];
      }
    }
  }
  allStrings;//?
  substring; //?
}

longestsimple("ffaaaabbbbcttavvfffffdf");

function anotherwarriorslongest(str: string) {
  let max = 0;
  let cur = 0;
  let pos = 0;
  for (let i = 1; i < str.length; ++i) {
    if (str[i - 1] <= str[i]) {
      ++cur;
      if (cur > max) {
        max = cur;
        pos = i - max;
      }
    } else {
      cur = 0;
    }
  }
  return str.slice(pos, max + 1 + pos);
}

function remakelongest(str: string) {
  let cur = 0;
  let max = 0;
  let pos = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] <= str[i]) {
      cur++;
      if (cur > max) {
        max = cur;
        pos = i - max;
      }
    } else {
      cur = 0;
    }
  }
  return str.slice(pos, pos + max + 1);
}

anotherwarriorslongest("abcdekslajsabelsoamonp"); //?
remakelongest("abcdekslajsabelsoamonp"); //?

function reremakelongest(str: string) {
  let cur = 0, pos = 0, max = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] <= str[i]) {
      cur++;
      if (cur > max) {
        max = cur;
        pos = i - max;
      }
    } else {
      cur = 0;
    }
  }
  return str.slice(pos, pos + max + 1)
}

console.log(reremakelongest("abcdekslajsabelllsoamonp"));

function twoPowers(toTheNthPower: number) {
  return Math.pow(2, toTheNthPower);
}


twoPowers(1); //?
twoPowers(2); //?
twoPowers(3); //?
twoPowers(4); //?
twoPowers(5); //?
twoPowers(6); //?

Math.floor(Math.log2(1 + 1)) //?
Math.floor(Math.log2(2 + 1)) //?
Math.floor(Math.log2(3 + 1)) //?
Math.floor(Math.log2(4 + 1)) //?
Math.floor(Math.log2(5 + 1)) //?
Math.floor(Math.log2(5 + 1)) //?
Math.floor(Math.log2(6 + 1)) //?
Math.floor(Math.log2(7 + 1)) //?

parseInt("1", 2); //?

function simpleBijective(int: number) {
  let bijArr: number[] = [];
  bijArr.length = Math.ceil(Math.sqrt(int)); // eh, close enough
  let idx = bijArr.length - 1;
  bijArr.fill(0);
  while (int) {
    if (bijArr[idx] < 2) {
      int--;
      bijArr[idx]++;
    }
    else {
      bijArr[idx] = 0;
      idx--;
      bijArr[idx]++;
      while (bijArr[idx] > 2) {
        bijArr[idx] = 1;
        bijArr[idx - 1]++;
        idx--;
      }
      idx = bijArr.length - 1;
    }
  }
  return bijArr.filter(x => x).join("");
}
simpleBijective(7); //?

function fromStringToNum(str: string) {
  let arrayed = str.split("");
  let total = 0;
  for (let i = arrayed.length - 1; i >= 0; i--) {
    total += Math.pow(2, arrayed.length - i - 1) * parseInt(arrayed[i]);
  }
  return total;
}
fromStringToNum("1") //?


const bijectiveBinary = {
  convertToInt: function (str: string) {
    // enter your code here
    let arrayed = str.split("");
    let total = 0;
    for (let i = arrayed.length - 1; i >= 0; i--) {
      total += Math.pow(2, arrayed.length - i - 1) * parseInt(arrayed[i]);
    }
    return total;
  },
  convertFromInt: function (int: number) {
    // enter your code here
    let bijArr: number[] = [];
    bijArr.length = Math.ceil(Math.sqrt(int)); // eh, close enough
    let idx = bijArr.length - 1;
    bijArr.fill(0);
    while (int) {
      if (bijArr[idx] < 2) {
        int--;
        bijArr[idx]++;
      } else {
        bijArr[idx] = 0;
        idx--;
        bijArr[idx]++;
        while (bijArr[idx] > 2) {
          bijArr[idx] = 1;
          bijArr[idx - 1]++;
          idx--;
        }
        idx = bijArr.length - 1;
      }
    }
    return bijArr.filter(x => x).join("");
  }
};

bijectiveBinary.convertFromInt(8); //?
bijectiveBinary.convertToInt("112"); //?


Math.floor(Math.log2(7 + 1)); //?

function trafficLights(road: string, n: number) {
  // Your code here!
  let roadArr = road.split("");
  let output: string[] = [];

  let car = roadArr.indexOf("C"); //?

  while (n--) {

    if (roadArr[car+1]=="."){
      swap(roadArr, car, car+1)
      car = roadArr.indexOf("C");
    }

    output.push(roadArr.join(""))
  }


  return output;
}

function lightState () {

}


function swap(arr: any[], a: any, b: any) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

trafficLights("C.......................", 10); //?
// trafficLights("C...R............G......", 10);

let rotattion = ["R","R","R","O","G","G","G"];
let stringtest : string[] = [".",".",".",".",rotattion[0]]

