function tellFortune(children ,partner,location,job){
    return  `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
}

alert(tellFortune(3, "marah", "Amman", "developer"));
function calculateDogAge(puppyAge) {
    let dogAge = puppyAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}
calculateDogAge(4)