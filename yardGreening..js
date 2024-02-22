function yardGreening(input) {
    let squareMetersLandscape = Number(input[0]);
    
    let landscapeEntireYard = squareMetersLandscape * 7.61;
    let discountMoney = landscapeEntireYard * 0.18;
    let finalPrice = landscapeEntireYard - discountMoney;
    
    

    console.log(`The final price is: ${ finalPrice} lv. `);
    console.log(`The discount is: ${ discountMoney} lv.`);
}
yardGreening([550]);
//predadena