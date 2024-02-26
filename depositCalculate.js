function depozitCalculator(input) {
    let depozitAmout = Number(input[0]);
    let termDepozit = Number(input[1]);
    let yearDepozit = Number(input[2]);
    
   let totalForOneYear = depozitAmout * (yearDepozit / 100);
   let totalForOneMonth = totalForOneYear / 12;
   let totalMoney = depozitAmout + (termDepozit * totalForOneMonth);
    console.log(totalMoney);
}
depozitCalculator([
"200",
"3",
"5.7",
])
