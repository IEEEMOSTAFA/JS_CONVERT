
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch  '
    return result;
}
// const shoveoHeight = inchToFeet(75);
// console.log(shoveoHeight);
const shoveoHeight2 = inchToFeet2(75);
// console.log(shoveoHeight2);

// mile to kilometer:: 
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo
}
const kilo_res = mileToKilometer(3)
console.log("Total Kilometer Transform is : ",kilo_res);