function foodDelivery(input) {
let chicenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegitabelMenu = Number(input[2]);

let priceChicenMenu = chicenMenu * 10.35;
let priceFishMenu = fishMenu * 12.40;
let priceVegitableMenu = vegitabelMenu * 8.15;

let priceForAll = priceChicenMenu + priceFishMenu + priceVegitableMenu ;
let pricedessert = priceForAll * 0.2;
let total = priceForAll + pricedessert + 2.50;

console.log(total);

}
foodDelivery(["2 ", "4 ", "3 "]);
//predadena + 