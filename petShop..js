function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let priceDogFood = 2.50;
    let priceCatFood = 4.00;
    let finalAmount = dogFood * priceDogFood + catFood * priceCatFood;

    console.log(`${finalAmount} lv.`);
}
petShop(["13 ", "9 "]);
//predadena