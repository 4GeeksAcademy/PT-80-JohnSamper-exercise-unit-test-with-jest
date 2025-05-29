// this is my functiom that sums two number
const sum = (a,b) =>{
    return a + b 
}
// just a console log for ourselves 
console.log(sum(7,3))
 
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports ={sum};



let oneEurols = {
    "JPY" : 156.5, // japan jen 
    "USD" : 1.07, // US dolar 
    "GPP" : 0.87,// British pound
}

// function fromDollarToYen(dollarAmount) {

//     let euroAmount = dollarAmount / 1.07; //Sine 1.07 USD = 1 EUR

//     let YenAmount = euroAmount * 156.5; //since 1 Eur = 156.5 JPY

//     return YenAmount;

// } 

// function fromEurotoDollar(euroAmount){

//     let dollarAmount = euroAmount * 1.07;

//     return dollarAmount;


// }


// function fromYenToPound(YenAmount){

//     let euroAmount =YenAmount * 1; // since one EUR = 156.5 JPY 

//     return euroAmount
// }



// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {



     let valueInEuro = valueInDollar / 1.07; // Since 1.07 USD = 1 EUR

     let valueInyen  = valueInEuro * 156.5; //since 1 Eur = 156.5 JPY

     return valueInyen; 
    

 } ;


 const fromYenToPound = function(valueInYen) {

    let valueInEuro = valueInYen / 156.5; // since one EUR = 156.5 JPY 

    let valueInPound = valueInEuro * 0.87; // since one EUR = 0.87 GBP

    return valueInPound;
 };


// We include fromEuroToDollar here as well because it needs to be exported

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


