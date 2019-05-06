function isPalindrome(text) {
    text = text.toLowerCase();
    let textArray = text.split('');
    let characterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lettersArray = [];
    textArray.forEach(char => {
       if(characterArray.indexOf(char) > -1) lettersArray.push(char);
    });

    console.log(lettersArray);
    return (lettersArray.join('') === lettersArray.reverse().join(''));
}

console.log(isPalindrome("Madam I'm Adam"));