// function catAndMouse(x, y, z) {

// let catA = x
// let catB = y

// console.log(z - x);
// console.log(z - y);

// if (catA < catB) {
//     return 'CatB'
// }
// else if (catB > catA) {
//     return 'catA'
// }
// else {
//     return "muouse"
// }

// }

// console.log(catAndMouse(1,3,2));

function extraLongFactorials(n) {
  let result = []
  
  let overal = BigInt(1)

for (let i = 1; i <= n; i++) {
    result.push(i)
}

for (let a = 0; a < result.length; a++) {
   overal *= BigInt(result[a])
    
}
console.log(String(overal));
}


console.log(extraLongFactorials(25));