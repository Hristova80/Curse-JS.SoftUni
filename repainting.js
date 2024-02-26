function repainting(input){
    let naelon = Number(input[0]);
    let peint = Number(input[1]);
    let peintThinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceForNaelon = (naelon + 2) * 1.50;
    let priceForPeint = (peint * 1.1) * 14.50;
    let priceForPeintThinner = peintThinner * 5;

    let totalPriceForStuff = priceForNaelon + priceForPeint + priceForPeintThinner + 0.40;
    let priceForWorkForOneHour = totalPriceForStuff * 0.30;
    let totalPriceForWork = priceForWorkForOneHour * hours;
    let total = totalPriceForStuff +totalPriceForWork;
    console.log(total);

}
repainting(["10 ",
"11 ",
"4 ",
"8 "]);
//predadena