function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotal = laptopCount * laptopPrice;
    const tabletTotal = tabletCount * tabletPrice;
    const mobileTotal = mobileCount * mobilePrice;

    const totalBudget = laptopTotal + tabletTotal + mobileTotal;

    return totalBudget;
}

const budget = calculateElectronicsBudget(2, 1, 3);
console.log(budget);