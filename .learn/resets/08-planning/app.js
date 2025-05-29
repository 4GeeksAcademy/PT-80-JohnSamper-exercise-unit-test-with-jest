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

function fromDollarToYen = 