/*
array has  some duplicate elements 
[]

*/
const birianikhor = ['abul','babul','abul','babul','dabul','kabul','cabul'];
const numbers = [1,5,61,5,87,7,5,81,61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
        

   }
   return unique;

}
const uniqueArray1 = noDuplicate(birianikhor);
const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray1);
console.log(uniqueArray2);