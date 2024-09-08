const phones = [
    {name : 'Samsung', price : '20000', camera : '12mp', color : 'black'},
    {name : 'Xoami', price : '18000', camera : '12mp', color : 'black'},
    {name : 'Oppo', price : '30000', camera : '12mp', color : 'black'},
    {name : 'Iphone', price : '100000', camera : '12mp', color : 'black'},
    {name : 'Walton', price : '50000', camera : '12mp', color : 'black'}
]

function cheapestNumber(phones){

    let min = phones[0];

    for(const phone of phones){
        if(phone.price < min.price){
            return min = phone;
        }
    }

    return min;
}

const min = cheapestNumber(phones);
console.log('min phones number is ', min);