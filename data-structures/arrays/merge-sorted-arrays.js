function mergeSortedArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Function arguments are not an array!';
  }
  return [...arr1, ...arr2].sort((a,b) => a - b);
}

function mergeSortedArrays2(array1, array2){
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);
mergeSortedArrays2([0,3,4,31], [3,4,6,30]);