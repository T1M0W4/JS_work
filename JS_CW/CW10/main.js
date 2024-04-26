// let array = [
//     [1,2,3],
//     ['a','b','c',]
//     ['name', 'age', 'gender']
// ]

// let obj = {
//     name: 'Alex',
//     age: 20,
//     isStudent: true
// }

// // let entr = Object.entries(obj)
// // let entrArr = Object.fromEntries(array)
// // console.log(entr,entrArr);

// let map = new Map(Object.entries(obj))
//         map
//             .set('helo', 'world')
//             .set(NaN, 'NaN')
//             .set('Function callback()', true)

//             map.get(NaN);
//             console.log(map.has('hello'));
//             // map.delete('function callback()');
//             // map.clear()
// console.log(map)

// for(let[key, value] of map){
//     console.log(key, value)
// }

// map.forEach((key, val, m)=>{
//     console.log(key);
// })

// let array1 = [1,1,1,1,1,5,5,5,5,5,6,7,8,9,10]
// let set = new Set(array)
// set
//     .add(4,5,6,10)
//     .add('true')

//     set.add(4,5,6,10,9)
// console.log(set)

// let str = 'hello world hello'
// let pattern = /world/g
// let replace = 'Javascript'
// let find = str.replace(pattern, replace)
// console.log(find);

// let str2 = '2024=10=10';
// let patern2 = /(\d{4}) - (\d{2}) - (\d{2})/;
// console.log(match[0])
// console.log(match[1])
// console.log(match[2])
// console.log(match[3])



const products = [
    { name: 'Футболка', price: 1000, discountPercent: 10 },
    { name: 'Джинсы', price: 2000, discountPercent: 20 },
    { name: 'Кроссовки', price: 3000, discountPercent: 0 }, 
    { name: 'Рубашка', price: 1500 } 
];


let productsWithDiscount = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let finalPrice;

    if (product.discountPercent !== undefined) {
        let discountAmount = (product.price * product.discountPercent) / 100;
        finalPrice = product.price - discountAmount;
    } else {

        finalPrice = product.price;
    }

    productsWithDiscount.push({
        name: product.name,
        price: finalPrice
    });
}

console.log(productsWithDiscount);