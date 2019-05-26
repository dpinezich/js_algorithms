function caesarCipher(str, num) {
    // can only between 0 and 25
    num = num % 26;

    let lowerCaseString = str.toLowerCase();
    let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let newString = '';
    for (let i=0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i];

        if(currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        let currentIndex = alphabetArray.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        // edge cases around zero
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex

        // solve big / small letter issue
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabetArray[newIndex].toUpperCase();
        } else {
            newString += alphabetArray[newIndex];
        }
    }

    return newString;
}


console.log(caesarCipher('Hans im Glueck', 2));