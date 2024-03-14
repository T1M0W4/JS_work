// let num = 0;
// while(num < 10){
//     if (num%2==0){
//         console.log(num);
//     }
//     num++
// }


// let num2 = 1;
// do{
//     console.log(num2)
//     num2++
// }
// while(num2<1){

// }

// for(let i = 0; i<10; i+=2){
//     console.log(i)
// }

//1
// let $userNumber = +prompt("Enter number: " );
// for(let i = 0; i<$userNumber; i++) {
//     console.log("#")
// }

//2
// let $userNumber = +prompt("Enter number: " );
// while ($userNumber != 0){
//     $userNumber --
//     console.log($userNumber)
// }

//3
// let $userNumber1 = +prompt("Enter number: " );
// let $userNumber2 = +prompt("Enter number: " );
// let res = 0 
// let res2 = 0
// while(res < $userNumber2){
//     res ++
//     res2 = $userNumber1*$userNumber1
// }
// console.log(res2)

// 4
// let $userNumber1 = +prompt("Enter number: " );
// let $userNumber2 = +prompt("Enter number: " );
// let del = 1;
// while(del<=Math.min($userNumber1, $userNumber2)){
//     if ($userNumber1%del==0 && $userNumber2%del ==0){
//         console.log(del)
//     }
// }


5
let $userNumber1 = +prompt("Enter number: ");
let iter = 1;
let res = 1;
while(iter < $userNumber1){
    iter++
    res*=iter
}
console.log(res)