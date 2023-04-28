/** 
uniq 
*/
//importing the loadash library
/* const {uniq} = require("lodash");
//created array with repeated number
const items = [1,1,2,2,3,3,4,5,];
//uniq will remove the dupilicate number
let removeRepeated = uniq(items);
console.log(removeRepeated);
 */


/** 
sortedUniq
*/

//sortuniq
const _ = require("lodash");
const items = [1,1,2,2,3,3,4,5,];
const ele = _.sortedUniq(items);
console.log(ele);

/** 
Find
*/

let {find} = require("lodash");

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
console.log("user details:")
let user = find(users, { 'user': 'barney' });
console.log(user);
console.log("Below 18:")
let filter = find(users, function(user){
  return user.age < 18;
});
console.log(filter);

/** 
assign
*/

let {assign} = require("lodash");

let obj1 = {name: "xyz"};
let obj2 = {age:"20",address:"abc, street, bang"};
let result = assign({ salary: "15K"}, obj1,obj2);
console.log(result);

/** 
Includes
*/

/** 
Includes
*/

let {includes} = require("lodash");
let items = ["mango","apple","orange"];
let result = includes(items,"apple");
console.log(result)

/** 
difference
*/
 
let {difference} = require("lodash");
let items = ["mango","apple","orange"];
let item=["apple"];
let result = difference(items,item);
console.log(result); 

/** 
GET
*/

 let {get ,clone,cloneDeep} = require("lodash");
let res = {
  "data": {
    "result": {
      "id": "123456"
    }
  }
};
 
//we getting the data upon the undefined it shows error.

console.log(res.body.id);

  let result = get(res,'data.result.id','');
  console.log(`Result: ${result}`);
 */
/* if(res && res.data && res.data.result.id1){
  console.log(res.data.result.id);
}
else{
  console.log("Data is not present");
} 

/** 
Clone and CloneDeep
*/

const cloneResponse = clone(res);
console.log(res);
const deepCloneRes = cloneDeep(res);

res.data.result.id="1432";
console.log({cloneResponse});
console.log({deepCloneRes}); 

/** 
intersection
*/

let {intersection} = require("lodash");
let obj1= ["mango","apple","orange"];
let obj2=["ap"];
let result = intersection(obj1,obj2);
console.log(result);