function findAveragePhonePrice(phones) {
    // console.log(phones);

    let totalPrice = 0;
    // Loop through each phone and add its price
    for (const phone of phones) {
        // console.log(phone);

        const phonePrice = phone.price;
        // console.log(phonePrice);
        totalPrice += phonePrice;
    }

    // Calculate the average price
    const numberOfPhones = phones.length;
    // console.log(numberOfPhones);

    const averagePrice = totalPrice / numberOfPhones;
    // console.log(averagePrice);

    // Return the average
    return averagePrice;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);

console.log(averagePrice);

console.log(Math.round(averagePrice));