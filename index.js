// Permutation of the string ?
// ABC => [ABC, ACB, BAC, BCA, CAB, CBA];

let input = 'DOG';

function stringPermutation(str) {
  if (str.length === 0) return '';
  if (str.length === 1) return str;

  let result = [];
  for (i = 0; i < str.length; i++) {
    const mainValue = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainingChars.length; j++) {
      result.push(mainValue + stringPermutation(remainingChars)[j]);
    }
  }
  return result;
}

console.log(stringPermutation(input));
