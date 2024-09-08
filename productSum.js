const products = [
    {name : 'Sampo', price: 20},
    {name : 'saban', price : 35},
    {name : 'powder', price : 50},
    {name : 'gamca', price : 70},
]

function productPrice(products){

    let total = 0

    for(const product of products){
        total = total + product.price;
    }

    return total;
}

const total = productPrice(products);
console.log('total price is ',total);