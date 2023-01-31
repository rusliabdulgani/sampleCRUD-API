class Honda {
  constructor(mesin, roda) {
    this.mesin = mesin;
    this.roda = roda;
  }
}

class HondaBeat extends Honda {
  constructor(mesinku, noMesinku, rodaku) {
    super(mesinku, rodaku);
    this.noMesin = noMesinku;
  }
}

let hondaBeat1 = new HondaBeat("150cc", "abcd");
let hondaBeat2 = new HondaBeat("135cc", "abce");

hondaBeat1.roda = 4;

console.log(hondaBeat1);
console.log(hondaBeat2);

var arr = [2, 5, 7, 90, 23, 5, 7, 8, 9];

var bilanganGenap;
var bilanganGanjil;

bilanganGenap = arr.filter((item) => item % 2 == 0);

bilanganGanjil = arr.filter((item) => item % 2 !== 0);

