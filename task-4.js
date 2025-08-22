function findLongestWord(sentence) {
    // console.log(sentence);

    const words = sentence.split(' ');
    // console.log(words);

    let longestWord = words[0] || '';
    // console.log(longestWord);

    for (let word of words) {
        // console.log(word);

        if (word.length > longestWord.length) {
            // console.log(`'${word}' is longer than '${longestWord}'`);

            longestWord = word;
            // console.log(longestWord);
        }
    }
    // console.log(longestWord);
    return longestWord;
}

const input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input));