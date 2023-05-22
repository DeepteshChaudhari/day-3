let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert objects to strings and sort them
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);
let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

// Compare the sorted strings
if (sortedStr1 === sortedStr2) {
  console.log("The JSON objects are equal (ignoring property order).");
} else {
  console.log("The JSON objects are not equal.");
}
