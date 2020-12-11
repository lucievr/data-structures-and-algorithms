// Naive
function hasPairWithSum(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] === sum)
            return true;
     }
  }

  return false;
}

// O(a*b) time complexity

// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

// O(a+b) time complexity

hasPairWithSum2([6,4,3,2,1,7], 9);

// example walkthrough
hasPairWithSum2([5,3,4], 9);

// in the for loop:
// i = 0=> check if 5 is in mySet? NO=> add 9-5 = 4 to mySet => mySet{4}
// i = 1 => check if 3 is in mySet? NO => add 9 - 3 = 6 to mySet => mySet{4, 6}
// i = 2 =>check if 4 is in mySet? YES =>Since you visited the complement of 4 that is 5 before, it means that you have two integers in your array that sum up to 9 and you have the condition that satisfies our if statement then the function returns true and as a small reminder "return" finishes the job of the function, therefore, it does not implement adding 9 - 4 to mySet.  So mySet would contain {4, 6} in this example.