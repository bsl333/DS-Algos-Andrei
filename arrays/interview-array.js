function reverseStr(str) {
  // if (typeof str !== 'string') return 'invalid input type';
  // if (!str) return str;
  return !str ? str : str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
}

console.log(reverseStr('olleh'));

function mergeSortedArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const sorted = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      sorted.push(arr1[p1])
      p1++;
    } else {
      sorted.push(arr2[p2])
      p2++;
    }
  }

  return [...sorted, ...arr1.slice(p1), ...arr2.slice(p2)];
}

console.log(mergeSortedArrays([1, 2, 3, 4], [2.5, 3.5, 10, 100]));