//  funtion takes an array as parameter
// * give me the avg number of the odd number

/*
put odd in a array
*/
function oddAvg(number)
{
    const odds = [];
    // console.log(number);
    for(const num of number){
       if(num % 2 === 1){
        // console.log(num);
        odds.push(num);
       }
    }
    //  odds aray only contain odd number::
    // console.log(odds);
    let sum = 0;
    for(const nums of odds){
        sum = sum + nums;


    }
    const count = odds.length;
    console.log(sum,count);
    const avg = sum / count;
    return avg;

}

const numbers = [42,13,59,65,81,96];
const avg = oddAvg(numbers);
console.log("avg of the odd number is : ",avg);