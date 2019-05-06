let bubbleSort = (inputArray) => {
    let len = inputArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
    return inputArray;
};

let superArray = [2, 5, 32, 1, 4, 11];
console.log(bubbleSort(superArray));