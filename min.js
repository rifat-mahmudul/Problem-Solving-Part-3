const phones = [20000,16000, 18000, 30000, 40000, 55500, 61506];

function minPrice(numbers){

    let min = numbers[0];

    for(num of numbers){
        if(num < min){
            min = num;
        }
    }

    return min;
}

const min = minPrice(phones);
console.log('min price is ', min);