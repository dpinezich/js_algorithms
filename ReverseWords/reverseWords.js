

function reverseWords(string) {

    let arrayOfWords = string.split(' ');
    let reversedWordsArray = [];

    arrayOfWords.forEach(word => {
       let reversedWord = '';
       for (let i = word.length - 1; i >= 0; i--) {
           reversedWord += word[i];
       }

       reversedWordsArray.push(reversedWord);
    });

    return reversedWordsArray.join(' ');

}








console.log(reverseWords('this is a string of words!'));