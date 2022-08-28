// TEST FILE
console.log('JS ok!!');

// SELECT id FILE HTML
const containerHTMLElement = document.getElementById('container');

// CYCLING NUMBERS FROM 1 TO 100
for (let number = 1; number <= 100; number++) {

    // PRINT CONTENT CONSOLE
    let text = number;
    if (number % 3 === 0 && number % 5 === 0) {     // if rest of both division (nr/3; nr/5) is 0 text --> 'FizzBuzz'
        text = 'FizzBuzz';
    } else if (number % 3 === 0) {                  // if rest of division (nr/3) is 0 text --> 'Fizz'
        text = 'Fizz';
    } else if (number % 5 === 0) {                  // if rest of division (nr/5) is 0 text --> 'Buzz'
        text = 'Buzz';
    }

    // PRINT NUMBER IF TEXT HASNT CONTENT
    const result = text.length > 0 ? text : number;
    console.log(result);

    const element = document.createElement('div');

    // BONUS EXERCISE 1
    element.className = 'square';
    if (text.length > 0) {
        element.classList.add(text);
    }

    element.append(result);

    containerHTMLElement.append(element);

}

