function compareArrays (arr1, arr2) {
  let result = arr1.length == arr2.length && arr1.every((item, i) => item === arr2[i]);  
  return result; 
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((a) => a > 0).filter((a) => a % 3 === 0).map((a) => a*10)
  return resultArr; 
}
