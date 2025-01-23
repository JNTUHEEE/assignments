/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestElement = numbers.reduce((i,j)=>{
        if(i>j){
            return i;
        }else{
            return j
        }
    },numbers[0])

    return largestElement;
}

module.exports = findLargestElement;