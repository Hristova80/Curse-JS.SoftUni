 function vacationBooksList(input) {
    let broiStr = Number(input[0]);
    let strPerAuar = Number(input[1]);
    let dey = Number(input[2]);
    
   let totalTime = broiStr / strPerAuar;
   let totalDay = totalTime / 2;
   
    console.log(totalDay);
}
vacationBooksList(
 ["212 ",
"20 ",
"2 "]);
//predadena