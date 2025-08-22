const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names) {

    let smallest = names[0];
    for (const name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

const smallestName = getSmallestName(heights2);
console.log(smallestName);