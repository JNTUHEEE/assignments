/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let str1 = str.toLowerCase().split('')
    let count = 0;
    for(let i=0;i<str1.length;i++){
      if(str1[i] == 'a'|| str1[i] == 'e'|| str1[i] == 'i'|| str1[i] == 'o'|| str1[i] == 'u' ){
        count++
      }
    }

    return count;
}

module.exports = countVowels;