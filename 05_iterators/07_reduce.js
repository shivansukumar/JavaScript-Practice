const arr = [1,2,3,4];

const total = arr.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal is: ${currVal}`);
    return acc+currVal;
}, 0)

console.log(total);

const shoppingCart = [
    {
        itemName : "js course",
        price : 499,
    },
    {
        itemName : "java",
        price : 499,
    },
    {
        itemName : "Python",
        price : 499,
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc+item.price, 0)

console.log(totalPrice);