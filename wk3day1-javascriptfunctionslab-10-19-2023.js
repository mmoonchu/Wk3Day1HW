// 1.
function maxOfTwoNumbers(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x >= y ? x : y;
    } else {
        return 'At least one of those values is not a number.';
    }
}
console.log(maxOfTwoNumbers(2, 1));

////////////////////////////////////////////////////////////////////
// 2.
const maxOfThree = function(x, y, z) {
    if (typeof x === 'number' && typeof y === 'number' && typeof y === 'number') {
        if (x >= y) {
            if (x >= z) return x;
        } else if (y >= z) return y;
        else return z;
    } else {
        return 'At least one of those values is not a number.';
    }
}
console.log(maxOfThree(4, 3, 3));

////////////////////////////////////////////////////////////////////////
// 3.
function isCharAVowel(character) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (typeof character === 'string' && character.length === 1) {
        return vowels.includes(character) ? true : false;
    } else {
        return 'Not a character'
    }
}
console.log(isCharAVowel('e'));

////////////////////////////////////////////////////////////////////////
// 4.
const sumArray = function(arr) {
    if (Array.isArray(arr) !== true) return 'Not an array';

    let sum = 0;
    for (num of arr) {
        if (typeof num !== 'number') {
            sum = 'At least one of the array elements is not a number.';
            break;
        } else {
            sum += num;

        }
    }
    return sum;
}

arr1 = [1, 3, 5, 7, 9];
arr2 = [9, 9, 9, 9];
arr3 = [1, 4, 's', 5];

console.log(sumArray(arr2));

////////////////////////////////////////////////////////////////////////
// 9.
function stringsLongerThan(arrOfStrings, num) {
    if (Array.isArray(arrOfStrings) !== true) return '1st argument is not an array.';
    if (typeof num !== 'number') return '2nd argument is not a number.'

    const longerThanNum = [];
    for (string of arrOfStrings) {
        if (typeof string !== 'string') {
            result = 'At least one of the array elements is not a string.';
            break;

        } else if (string.length > num) {
            longerThanNum.push(string);
        }
    }
    return longerThanNum;
}

const stringArray1 = ['define', 'a', 'function', 'as', 'declaration']
console.log(stringsLongerThan(stringArray1, 4));