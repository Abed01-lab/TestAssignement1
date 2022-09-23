const assert  = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function ArabicToRomanNumeral(number){
    let roman_numeral = ""
    const units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const thousands = ["M", "MM", "MMM"]
    let numberArray = number.toString().split("")
    numberArray = numberArray.reverse()
    for (let index = 0; index < numberArray.length; index++) {
        if (numberArray[index] === "0") {
            continue;
        }
        if (index === 0) {
            roman_numeral = units[numberArray[index] -1] + roman_numeral
        } else if (index === 1) {
            roman_numeral= tens[numberArray[index]- 1] + roman_numeral 
        } else if (index === 2) {
            roman_numeral= hundreds[numberArray[index]- 1] + roman_numeral
        } else {
            roman_numeral= thousands[numberArray[index]- 1] + roman_numeral
        }
        
    }
    return roman_numeral
}

Given('I have number {int}', (number) => {
    this.number = number
});

When('I want to convert it to roman numeral', () => {
    this.actualAnswer = ArabicToRomanNumeral(this.number)
});


Then('I should get {string}', (expectedAnswer) => {
    assert.strictEqual(this.actualAnswer, expectedAnswer)
});