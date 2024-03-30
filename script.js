/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element,ind)=>{
    if(element.profession === "developer"){
      console.log(element.name)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element,ind)=>{
    if(element.profession === "developer"){
      console.log(element.name)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newData =  {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.reduce((element)=> element.profession !== "admin");
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "param", age: "38", profession: "admin" },
    { id: 6, name: "upan", age: "28", profession: "amdin" },
    { id: 7, name: "nishad", age: "48", profession: "developer" },
  ];

  let concatenatedArray = arr.concat(newArray);

  console.log(concatenatedArray);
}
