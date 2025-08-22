// 1st way----------

const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers) {

    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

const min = getMin(heights2);
console.log(min);



// 2nd way----------

// const heights2 = [167, 190, 120, 165, 137];
// const min = Math.min(...heights2);
// console.log(min);