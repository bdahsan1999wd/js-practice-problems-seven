function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}
const result = add(1, 9);
console.log(result);


/* ---------------------function multiply------------------ */

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2, 8));

/* -----------------delete property of object----------------------- */

let student = {name : 'Yo Mama', age : 17};
// console.log(student);

delete student.age;
console.log(student);