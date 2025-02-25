const persons = ['akib', 'zarif', 'nokib', 'sakib', 'rakib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);/* aitay bohut kerpa ase re vai , relax e kaj koro


// sort

/*
* Ascending ---> smaller to Larger: [2, 3, 4, 5]
* Descending --> larger to smaller:[9, 5, 3, 1]
*/

const numbers = [8, 1, 9, 6, 4, 14]
const numbers_asc =[... numbers].sort(function(a,b){return a - b });
const numbers_dsc =[... numbers].sort(function(a,b){ return b - a});
console.log(numbers_asc); /*ekhane 1 pore 4 na hoye 14 asce karon js bangla niyone boro coto deke na sudu deke  1 pore 1 related kisu asae kina tai 1 pore 14 asces.*/
console.log(numbers_dsc);


// ai ... kno je hoilo matar opor diya gese , so kainda lab nai hudai presure , dont worry google it.


