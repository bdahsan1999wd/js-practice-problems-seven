/* একটা ফাংশন লিখবে যেটার নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা, যাতে সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */

/* --------------------paper requirements------------------ */

// function paperRequirements(book1, book2, book3){
//     let firstBook = (book1 * 100);
//     let secondBook = (book2 * 200);
//     let thirdBook = (book3 * 300);
//     // console.log(firstBook,secondBook,thirdBook);
//     const totalPage = firstBook + secondBook + thirdBook;
//     return totalPage;
// }
// // const paperRequire = (1, 2, 3);
// const totalBookPage = paperRequirements(1, 2, 3);
// console.log('Total page:', totalBookPage);

/* ----------------------other way-------------------------- */

function paperRequirements(book1, book2, book3){
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;
    const firstBookPage = book1 * firstBook;
    const secondBookPage = book2 * secondBook;
    const thirdBookPage = book3 * thirdBook;
    const totalPage = firstBookPage + secondBookPage + thirdBookPage;
    return totalPage;
}
// const paperRequire = (1, 2, 3);
const totalBookPage = paperRequirements(1, 2, 3);
console.log('Total page:', totalBookPage);