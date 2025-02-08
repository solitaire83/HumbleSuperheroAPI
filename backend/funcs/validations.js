function HeroInput(name, superpower, score)
{
    // this validation is for the case when the user forgot to provide any details
    if(!name && !superpower && !score) {
        return {valid: false, msg: "Hey you have to provide details about your hero!"}
    }

    if(!name) {
        return {valid: false, msg: "Sorry, you have to provide a name!"}
    }

    if(!superpower) {
        return {valid: false, msg: "Sorry, you have to provide a superpower!"}
    }

    if(!score) {
        return {valid: false, msg: "Sorry, you need to provide a score number!"}
    } else if(score < 1 || score > 10) {
        return {valid: false, msg: "Sorry, the score must be between 1 and 10!"}
    } else if(typeof score !== "number") {
        return {valid: false, msg: "Sorry, the score must be a number!"}
    }

    return {valid: true}
}

function HeroExistent(heroes, name)
{
    // basically if the hero is found in the array, it means it exists (doesnt matter if the name use uppercase or lowercase letters)
    const hero = heroes.find(h => h.name.toLowerCase() === name.toLowerCase());
    return hero ? true : false;
}

module.exports = {HeroInput, HeroExistent};