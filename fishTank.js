function fishTank(input){
let l = Number(input[0]);
let w = Number(input[1]);
let h = Number(input[2]);
let persent = Number(input[3]);

let cubicCm = l * w * h;
let cubicM = cubicCm / 1000;

let total = cubicM * (persent / 100);
console.log(cubicM - total);
}
fishTank(
["85 ",

"75 ",

"47 ",

"17 "]);
//predadena +