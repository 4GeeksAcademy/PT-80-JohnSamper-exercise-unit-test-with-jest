// import the funtion sum from the app.js file 
const{sum} = require('./app.js')


// start your first test 
test('add 14 + 9 to equal 23',()=>{

    //inside the test we call our sum funtion with 2 numbers 
    let total = sum(14,9);

    // we expect the sum of those 2 numbers to be 23 
    expect(total).toBe(23);

});





test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});





test("One dollar should be 156.5 japan Yen", function() {
    
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 dollar is 156.5 yen, then 1 dollar should be equal to 156.5 yen
    const expected = 156.5; 

    // This is the comparison for the unit test
    expect(fromDollarToYen(1)).toBe(expected);
});


test ("One yen should be 0.0063 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(1);

    // If 1 yen is 0.0063 pounds, then 1 yen should be equal to 0.0063 pounds
    const expected = 0.0063; 

    // This is the comparison for the unit test
    expect(fromYenToPound(1)).toBe(expected);
});