/*
leap year = year % 4 === 0

*/
function isLeapYear1(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// const isLipi = isLeapYear1(2028);
// console.log(isLipi);

// ----------------------------------------
/*
way -1: Those year is not divisible by 100 but  divisible by 4 is called leapyear:
way - 2 :
*/
function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true
    }
    else if ( year % 400 === 0) {
        return true
    }
    else {
        return false;
    }

}
const isLeap1 = isLeapYear(2100);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(1900);
const isLeap4 = isLeapYear(2052);
console.log(isLeap1,isLeap2,isLeap3,isLeap4);