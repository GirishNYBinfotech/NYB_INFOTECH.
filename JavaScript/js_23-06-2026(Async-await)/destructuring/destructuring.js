//array destructuring
let a=[1,2,3,[2,4]]
console.log(a[0])
console.log(a[3])
let [A,B,C,D]=a
let [x,y]=D
let b=[A,B,C,D]
console.log(A)
console.log(D)
console.log(b)

let x1=[2,3,[4,3,[5,2]]]
console.log(x1[2][1])
console.log(x1[2][2][0])
let [y1,y2,y3]=x1
let [y31,y32,y4]=y3
let [y41,y42]=y4
console.log(y1)
console.log(y3)
console.log(y4)

//object destructing
let obj={a:"A",b:"B",c:{d:"D",e:"E",f:{g:"G",h:"H"}}}
console.log(obj.a)
let obj1=obj.a
console.log(obj1)
let obj3=obj.c.d
console.log(obj3)
let obj4=obj.c.f.g
console.log(obj4)
let obj5=obj.c.f.h
console.log(obj5)

