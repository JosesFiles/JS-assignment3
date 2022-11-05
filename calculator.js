function calculator(){
    let number1 = Number(prompt('Enter the first number: '));  
    let number2 = Number(prompt('Enter the second number: ')); 
    console.log(number1, number2);
    let sum = number1 + number2;
    let difference = number1 - number2;
    let quotient = number1 / number2;
    let product = number1 * number2;
    console.log(sum, difference, quotient, product);
    document.getElementById('results').innerHTML=`
    <p>the numbers are: ${number1} and ${number2}</p>
    <p>the product is: ${product}</p>
    <p>the sum is: ${sum}</p>
    <p>the quotient is: ${quotient}</p>
    <p>the difference is: ${difference}</p>
    `
}