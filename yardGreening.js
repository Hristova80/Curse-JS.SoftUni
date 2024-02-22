/*Озеленяване на дворове
Божидара разполага с няколко къщи на Черноморието
и желае да озелени дворовете на някои от тях, 
като по този начин създаде уютна обстановка и 
комфорт на гостите си. За целта е наела фирма.
Напишете програма, която изчислява необходимате
сума, които Божидара ще трябва да заплати на
фирмата изпълнител на проекта. Цената на един
кв. м. е 7.61 лв със ДДС. Понеже нейният двор е 
доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.
Вход
От конзолата се прочита само един ред:
1. Кв. метри, които ще бъдат озеленени – реално
 число в интервала [0.00 … 10000.00]
Изход
На конзолата се отпечатват два реда:
· "The final price is: {крайна цена на услугата} lv."
· "The discount is: {отстъпка} lv."*/
function yardGreening(input) {
    let squareMetersLandscape = Number(input[0]);
    
    let landscapeEntireYard = squareMetersLandscape * 7.61;
    let discountMoney = landscapeEntireYard * 0.18;
    let finalPrice = landscapeEntireYard - discountMoney;
    
    

    console.log(`The final price is: ${ finalPrice} lv. `);
    console.log(`The discount is: ${ discountMoney} lv.`);
}
yardGreening(["550"])