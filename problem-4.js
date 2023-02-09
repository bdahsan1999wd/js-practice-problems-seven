/* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

/* ----------------------best friend--------------------- */

function bestFriend(array){
    let maxNumber = array[0].length;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > maxNumber){
            maxNumber = array[i].length;
            maxName = array[i];
        }
    }
    return maxName;
}
const bestFriendName = ['rabbi', 'shahadat', 'nazim', 'ahsanhabib', 'hasib', 'rifat', 'shakib'];
const maxFriendName = bestFriend(bestFriendName);
console.log(maxFriendName);