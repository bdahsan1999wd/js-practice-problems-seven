/* একটা ফাংশন লিখতে হবে, যেটার নাম হবে onlyPositive , একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */

/* ---------------------only positive---------------------- */

function onlyPositive(numbers){
    let newNumber = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number > 0){
            newNumber.push(number);
        }
        else{
            (number <= 0);
            break;
        }
    }
    return newNumber;
}
const numbers = [45, 87, 96, 11, 63, 0, 71, -56, 28];
const number = onlyPositive(numbers);
console.log(number);