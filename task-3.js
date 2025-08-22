function countAllVowels(inputText) {

    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let character of inputText) {

        if (vowels.includes(character)) {
            vowelCount++;
        }
    }
    // Return the total number of vowels found
    return vowelCount;
}

console.log(countAllVowels('Hello World'));
console.log(countAllVowels('Programming Hero'));