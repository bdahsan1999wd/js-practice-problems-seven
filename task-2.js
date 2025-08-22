function getNumberFrequency(numbers, matchItem) {

    // console.log(matchItem);
    let count = 0;

    for (let num of numbers) {
        // console.log('Checking number:', num);
        if (num === matchItem) {
            count++;
        }
    }
    // console.log(count);
    return count;
}

let numbers1 = [5, 6, 11, 12, 98, 5];
console.log(getNumberFrequency(numbers1, 5));

let numbers2 = [5, 6, 11, 12, 98, 5];
console.log(getNumberFrequency(numbers2, 25));