//loops
for (let i = 0; i <= 5; i++) {
    console.log("total steps:", i)
}

let a = [1, 2, 3, 4, 5]
for (let x = 0; x <= a.length; x++) {
    console.log(x)
}

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

for (let y = 0; y <= 10; y++) {
    if (y % 2 == 0) {
        console.log("even number", y)
    }
}

for (var z = 10; z >= 0; z--) {
    if (z % 2 != 0) {
        console.log("odd numbers in reverse 10-0", z)
    }
}