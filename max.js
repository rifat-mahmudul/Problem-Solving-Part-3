function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return `${num1} is bigger.`;
    }

    else if(num2 > num1 && num2 > num3){
        return `${num2} is bigger`;
    }

    else{
        return `${num3} is bigger`;
    }
}

const number = max(32,40,25);
console.log(number);