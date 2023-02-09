/* একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */

/* -----------------------centimeter to meter--------------------- */

function centiMeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    // console.log(meter);
    return meter;
}
const Centimeters = 178;
const totalCentimeters = centiMeterToMeter(Centimeters);
console.log(totalCentimeters,'Meters');

/* ----------------------meter to centimeter------------------- */

function meterToCentimeter(meter){
    const centimeter = meter * 100;
    // console.log(centimeter);
    return centimeter;
}
const meter = 9.6;
const totalMeter = meterToCentimeter(meter);
console.log(totalMeter,'Centimeters');