function basketballEquipment(input) {
    let taxForYear = Number(input[0]);
    

    let priceForBasketShoes = taxForYear - (taxForYear * 0.4);
    let priceForBasketTeam = priceForBasketShoes - (priceForBasketShoes * 0.2);
    let priceForBasketBall = priceForBasketTeam / 4;
    let priceForBasketAccessories = priceForBasketBall / 5;
    let total = taxForYear + priceForBasketTeam + priceForBasketShoes + priceForBasketBall + priceForBasketAccessories;

    console.log(total);

}
basketballEquipment([365]);
//predadena