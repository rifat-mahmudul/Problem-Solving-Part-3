function add(num1, num2){
    return num1 + num2;
}

function substrac(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, numbers){
    if(numbers === 'add'){
        const result = add(a, b);
        return result;
    }

    else if(numbers === 'substrac'){
        const result = substrac(a, b);
        return result
    }

    else if(numbers === 'multiply'){
        const result = multiply(a, b);
        return result
    }

    else if(numbers === 'divide'){
        const result = divide(a, b);
        return result;
    }

    else{
        return 'Only add, subtrack, multiply and divide can allowed.'
    }
}


console.log(calculator(5,6, 'divide'));