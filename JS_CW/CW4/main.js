// for (let year = 2000; year <= 2021; year++) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 console.log(year);
//             }
//         } else {
//             console.log(year);
//         }
//     }
// }

//---

// show_message()
// function show_message(){
//     console.log('Hello')
// }
// show_message()

// let show_message2 = function(){
//     console.log('assdads')
// }
// show_message2()

// let show_message3 = () => console.log('asdadsa')
// show_message3()

//---

// function calc_sum(num1, num2, more, less){
//     let sum = num1 + num2
//     if(sum>=10){
//         more();
//     }
//     else{
//         less();
//     }
// }

// function show_more(){
//     console.log('asdsad')
// }

// function show_less(){
//     console.log('dsfgsg')
// }

// cacl_sum(44, 27, show_more, show_less)

//---

// function calc_sum(num1, num2){
//     let sum = 1;
//     for(let i = 0; i < num2; i++){
//         sum = sum * num1
//     }
//     return sum
// }
// console.log(calc_sum(5, 6))

//---

//1
// let sum = (num1, num2) =>{
//     min_num = Math.min(num1, num2)
//     return min_num
// }
// console.log(sum())

//2
// let sum = (num, pow) =>{
//     result = Math.pow(num, pow)
//     return result
// }
// console.log(sum())

//3
// let result = 0

// function calc_sum(num1, oper, num2){
//     switch (oper){
//         case '-':
//             result = num1 - num2;
//             return result;
//         case '+':
//             result = num1 + num2;
//             return result;
//         case '*':
//             result = num1 * num2;
//             return result;
//         case '/':
//             result = num1 / num2;
//             return result;
//     }
//     console.log(calc_sum())
// }

//4

function isPrime(number) {
    if (number <= 1) {
        return ('Число 1 и отрицательные числа не являются простыми!');
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return (number + " является простым числом.");;
        }
    }
    return (number + " не является простым числом.");;
}

console.log(isPrime(17))

