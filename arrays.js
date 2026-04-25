let arr = [1,2,3,4,5]
//adding element at add
arr.push(6);
console.log(arr);  //[ 1, 2, 3, 4, 5, 6 ]
//accessing element at 0 index
console.log(arr[0]); //1
console.log(arr.length) //6
//removing element at end
arr.pop(); 
console.log(arr);  // [ 1, 2, 3, 4, 5]

//adding element at front
arr.unshift(10);
console.log(arr);  //[ 10, 1, 2, 3, 4, 5 ]

//removing element at first
arr.shift();
console.log(arr);   //[ 1, 2, 3, 4, 5 ]

//delete at specified index
delete arr[0]
console.log(arr); //[ <1 empty item>, 2, 3, 4, 5 ]
console.log(arr.length) //5


//copying array
let arr1 =[10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)


//map

console.log([5,6,7].map((element,index)=>{
    return element*100;
}))  //[ 500, 600, 700 ]


console.log([7,8,9].map((element,index)=>{
    return [element]; 
}))  // //[ [ 7 ], [ 8 ], [ 9 ] ]

console.log([7,8,9].map((element,index)=>{
    return [element,index];
}))   //[ [ 7, 0 ], [ 8, 1 ], [ 9, 2 ] ]


console.log([1,2,3,4,5,6].filter((element,index)=>{
    return element>3;
}).map((element,index)=>{
    return element*100
}))  //[ 400, 500, 600 ]