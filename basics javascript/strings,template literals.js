const firstName = "faizan"
const lastName = "tariq"

const birthYear = 1995
const currentYear = 2024

const job = "learning"


const datatring = "I'am " + firstName + " " + lastName + " I am " + (currentYear-birthYear) + " years old and I'am " + job;
console.log(datatring)  //This is normal String 

const dataTemplatLiterals = `i'am ${firstName} ${lastName} I'am ${currentYear - birthYear} years old and i am currently ${job}`;
console.log(dataTemplatLiterals);  //This is template literals starting from back ticks ` `

