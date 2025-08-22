const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalMonthlySalary(employees) {

    // Initialize total salary
    let totalSalary = 0;

    // Loop through each employee
    for (const emp of employees) {

        // Get starting salary
        const startingSalary = emp.starting;

        // Calculate increment based on experience
        const experienceIncrement = emp.experience * emp.increment;

        // Calculate current salary
        const currentSalary = startingSalary + experienceIncrement;

        // Add current salary to total
        totalSalary = totalSalary + currentSalary;

    }

    return totalSalary;
}

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log(totalMonthlySalary);