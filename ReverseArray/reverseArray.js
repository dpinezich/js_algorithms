function reverseArrayInPlace(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
        temporaryVar = arr[i];
        arr[i] = arr[arr.length - 1 - i]; // important is the -i
        arr[arr.length - 1 - i] = temporaryVar;
    }

    return arr;
}

console.log(reverseArrayInPlace(['this', 'is', 'a', 'test']))