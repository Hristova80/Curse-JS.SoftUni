function suppliesForSchool(input){
    let pen = Number(input[0]);
    let marcer = Number(input[1]);
    let cleaner = Number(input[2]);
    
    let pricePen = pen * 5.80;
    let priceMarcer = marcer * 7.20;
    let priceCleaner = cleaner * 1.20;
    let priceProduct = (pricePen + priceMarcer + priceCleaner);
    let priceAll = priceProduct - (priceProduct * 0.25);
    console.log(priceAll);

}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]);
//predadena