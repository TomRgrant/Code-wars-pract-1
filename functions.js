function createPhoneNumber(numbers) {
    // Code here

    // Checks length
    if (numbers.length === 10){

        // Splits number into amount needed
        const firstThree = numbers.splice(0,3);
        // Makes it a string and removes commas
        const str1 = firstThree.join("");

        const firstHalf = numbers.splice(0,3);
        const str2 = firstHalf.join("");

        const remaining = numbers;
        const str3 = remaining.join("");

        const formattedNum = `(${str1}) ${str2}-${str3}`;
        console.log(formattedNum);

        //returns the new formatted string
        return formattedNum;
    }
}

module.exports = createPhoneNumber;