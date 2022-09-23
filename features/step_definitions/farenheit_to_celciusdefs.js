const assert  = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function farenheitToCelcius(degree, unit) {
    if (unit === "farenheit") {
        const celcius = (degree - 32) / 1.8
        return parseFloat(celcius.toFixed(2))
    } else {
        const farenheit = (degree * 1.8) + 32
        return farenheit
    }
}

Given('a {float} degree {string}', (degree, unit) => {
    this.degree = degree
    this.unit = unit
});

When('I want to convert it to opposit tempeture unit', () => {
    this.actualAnswer = farenheitToCelcius(this.degree, this.unit)
});

Then('it should return {float} degree', (expectedAnswer) => {
    assert.strictEqual(this.actualAnswer, expectedAnswer)
});