function sumArray(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    return total;
}

console.log(sumArray([10, 20, 30, 40]));