//without using sort method
//for asending order
let a=[3,47,9,1,3]//array is created  with a
for(let i=0;i<a.length;i++){//starts from the first element i++ increases i by 1 after each iteration.
    for(let j=0;j<a.length;j++){//For every value of i, j runs through the entire array.
        if(a[i]<a[j]){//Compare the values at index i and index j.
            [a[i],a[j]]=[a[j],a[i]]
        }
    }
}
console.log(a)

//for decending order
let a1=[4,23,45,67,4,5]//array is created  with a1
for(let i=0;i<a1.length;i++){
    for(let j=0;j<a1.length;j++){
        if(a1[i]>a1[j]){
            [a1[i],a1[j]]=[a1[j],a1[i]]
        }
    }
}
console.log(a1)

//foreach loop
//it is used to iterate through each element of an array.
let b=[3, 47, 9, 1, 3]
b.forEach(function(value) {
    console.log(value)
})

//printing elements with index values
b.forEach(function(value,index) {
    console.log(index,value)
})
//sum all the array
let sum=0
b.forEach(value => {
    sum += value
})
console.log(sum)