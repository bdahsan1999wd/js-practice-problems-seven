/* সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */

/* ---------------------------feet to inch----------------------------- */

function feetToInch(feet){
    const inch = feet * 12;
    // console.log(inch);
    return inch;
}
const Feet = 6;
const totalInches = feetToInch(Feet);
console.log(totalInches,'Inches');

/* ------------------------inch to feet---------------------- */

function inchToFeet(inch){
    const feet = inch / 12;
    // console.log(feet);
    return feet;
}
const Inch = 72;
const totalFeet = inchToFeet(Inch);
console.log(totalFeet,'feet');