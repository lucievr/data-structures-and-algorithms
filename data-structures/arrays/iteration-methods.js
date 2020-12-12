// ITERATION METHODS

// forEach => Just executes a function for each element in the array
// O(n)
const names = ['Luis','Jose','John','Aaron'];

names.forEach(item => {
    console.log(item);
}); 

// map => Creates a new array with the result of the callback function (this function is executed for each item same as forEach
// O(n)
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];
const userDescriptions = users.map(item => {
 return `Hello my name is ${item.name} and I have ${item.age} years old.`
});
console.log(userDescriptions);

// filter => Creates a new array with the items that pass the given filter condition
// O(n)
const users = [
  {name:'Luis', admin:true},
  {name:'Jose', admin:true},
  {name:'Aaron'}
];
const adminUsers =  users.filter(item => item.admin);
console.log(adminUsers);

// reduce => Returns a single value after applying the reduction function for each element
// O(n)
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`); // Total 73, Average 24.333333333333332

// some => Returns a boolean value as true if finds one or more item that satisfies the given condition, 
// and returns false if not (also if the array is empty)
// O(n)

const users = [
  {name:'Luis', admin:true},
  {name:'Jose'},
  {name:'Aaron'}
];
const adminExists = users.some(item => item.admin);
console.log(adminExists); // true

// every => Returns a boolean value as true if all the items apply the given condition, and false if not
// O(n)
const users = [
  {name:'Luis', active:true},
  {name:'Jose', active:true},
  {name:'Aaron', active:false}
];
const isAllUsersActive = users.every(item => item.active);
console.log(isAllUsersActive); // false