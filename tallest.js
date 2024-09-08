const heights = [50,65, 70, 75, 82]

function getMax(numbers){
    let max = numbers[0];

    for(num of numbers){
        if(num > max){
            max = num;
        }
    }

    return max;
}

const max = getMax(heights);

console.log(`The biggest number is ${max}`);