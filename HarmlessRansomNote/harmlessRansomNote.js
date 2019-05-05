function harmlessRansomNote(noteText, magazineText) {
    let noteArray = noteText.split(' ');
    let magazinArray = magazineText.split(' ');

    let magazinObj = {}; // hashTable

    magazinArray.forEach((word) => {
       if (!magazinObj[word]) magazinObj[word] = 0; // set if not there
       magazinObj[word]++;
    });

    let noteIsPossible = true;
    noteArray.forEach((word) => {
        if (magazinObj[word]) {
            magazinObj[word]--;
            if (magazinObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });

    return noteIsPossible;

    // console.log(magazinObj);
}

let result = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
if (result) console.log('Yes that is ok');
else console.log('Nop it is not ok');