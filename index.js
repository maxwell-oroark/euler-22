const fs = require('fs');

let counter = 0;

const names = fs.readFileSync('./names.txt', 'utf-8');
const sorted = names.split(',').map((name) => name.replace(/['"]+/g, '')).sort()

function value(letter) {
  const alphabet = {
    A : 1,
    B : 2,
    C : 3,
    D : 4,
    E : 5,
    F : 6,
    G : 7,
    H : 8,
    I : 9,
    J : 10,
    K : 11,
    L : 12,
    M : 13,
    N : 14,
    O : 15,
    P : 16,
    Q : 17,
    R : 18,
    S : 19,
    T : 20,
    U : 21,
    V : 22,
    W : 23,
    X : 24,
    Y : 25,
    Z : 26
  }
  return alphabet[letter]
}

console.time('running')
sorted.forEach((name, i) => {
  let innerCounter = 0;
  name.split('').forEach((letter) => {
    innerCounter += value(letter)
  })
  counter += (innerCounter * (i + 1))
})
console.timeEnd('running')

console.log("======")
console.log("SORTED")
console.log("======")
console.log(counter)
