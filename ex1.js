// #1.변수 x가 10 보다 크고 20 보다 작을때 변수 x를 출력하는 조건식을 완성하라
// var x = 10;
// if(x>10 && x<20){
//   console.log(x);
// }

// # 2. for문을 사용하여 0~10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for(var i=0; i<10; i++) {
//   if(i%2 === 0){ 
//     console.log(i);
//   }
// }
// for문이 0~10 까지 반복 하도록 만들고 조건문 if를 넣어서 i가 0~10까지 나올때 i%2가 0이면 짝수이므로 조건을준다

// #3. for문을 사용하여 0~10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

// # 4. for문을 사용하여 0~10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// for(var i=10; i>=0; i--){
//   if(i%2 !== 0){
//     console.log(i);
//   }
// }

// #5. while문을 사용하여 0~10미만의 정수 중에서 짝수만을 작은 수 부터 출력하시오
// var i = 0;
// while(i < 10) {
//   if(i%2 === 0){
//     console.log(i);
//   }
//   i++;
// }

// #.6 while문을 사용하여 0~10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// var i = 10;
// while(i >=0) {
//   if (i%2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }

// #7. for문을 사용하여 0~10미만의 정수의 합을 출력하시오.
// var sum = 0;
// for(var i = 0; i<10; i++) {
//   sum += i;
// }
// console.log(sum);

// #8. 1~20미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// var sum =0;
// for(var i =1; i<20; i++){
//   if (i%2 !==0 && i%3 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// #9. 1~20미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// var sum =0;
// for(let i =1; i<20; i++) {
//   if(i%2 === 0 || i%3 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// #10. 두개의 주사위를 던졌을떄 눈의 합이 6이 되는 모든경우의 수를 출력하시오
// for(var i = 1; i<7; i++){
//   for(var j = 1; j<7; j++){
//   if(i + j === 6){
//   console.log([i,j]);
//     }
//   }
// }

// #11. 삼각형 -pattern 1
// *
// **
// ***
// ****
// *****

// var star ='';
// for(var i = 0; i<5; i++){
//   star += '*'
//   console.log(star);
// }

// #12. 삼각형 -pattern 2
// ' ' === 0
//   j0 j1 j2 j3 j4 
// i0 *  *  *  *  *  i === j log * && i < j log *
// i1 0  *  *  *  *  i > j log 0
// i2 0  0  *  *  *   
// i3 0  0  0  *  *  
// i4 0  0  0  0  *  

// for(var i = 0; i<5; i++){
//   var sum ='';
//   for(var j = 0; j<5; j++){
//     if (i <= j) {
//       sum += '*'; // *****
//     }else {
//       sum +=' ';
//     }
//   }
//   console.log(sum);
// }


// #13. 삼각형 -pattern 3
// ' ' === 0
//   j0 j1 j2 j3 j4
// i0 *  *  *  *  *   i === j log *
// i1 *  *  *  *  0   i + j =5 log 0
// i2 *  *  *  0  0   i + j >= 5 log 0
// i3 *  *  0  0  0   i + j < 5 log * 
// i4 *  0  0  0  0  

// for(var i = 0; i<5; i++) {
//   var star = '';
//   for(var j = 0; j<5; j++) {
//     if(i + j <5){
//       star +='*';
//     }else{
//       star +=' ';
//     }
//   }
//   console.log(star);
// }

// #14. 삼각형 -pattern 4 
// ' ' === 0
//   j0 j1 j2 j3 j4
// i0 0  0  0  0  *  i === j -> 0 && i + j = 4 -> *
// i1 0  0  0  *  *  i + j >= 4 -> *
// i2 0  0  *  *  *  i + j <4 -> 0
// i3 0  *  *  *  *
// i4 *  *  *  *  *

// for(var i = 0; i<5; i++) {
//   var star ='';
//   for(var j=0; j<5; j++) {
//     if (i+j >= 4) {
//       star +='*';
//     }else{
//       star +=' ';
//     }
//   }
//   console.log(star);
// }

// #15. 삼각형 -pattern 5
// ' ' === 0
//   j0 j1 j2 j3 j4 j5 j6 j7 j8 
// i0 0  0  0  0  *  0  0  0  0  i + j = 4 
// i1 0  0  0  *  *  *  0  0  0  i + j = 4,(5,6) ++2  4 <= star 
// i2 0  0  *  *  *  *  *  0  0  i + j = 4,5,6,7,8
// i3 0  *  *  *  *  *  *  *  0  i + j = 4,5,6,7,8,9,10
// i4 *  *  *  *  *  *  *  *  *  i + j = 4,5,6,7,8,9,10,11,12

// for(var i =0; i<5; i++) {
//   var star ='';
//   for(var j =0; j<9; j++) {
//     if(i === 0 && j === 4){
//       star +='*';
//     }else if(i===1 && j>=3 && j<=5){
//       star +='*';
//     }else if(i === 2 && j>=2 && j<=6){
//       star +='*';
//     }else if(i === 3 && j>=1 && j<=7){
//       star +='*';
//     }else if(i === 4 && j>=0 && j<=8){
//       star +='*';
//     }else{
//       star +=' ';
//     }
//   }
//   console.log(star);
// }

// #16. 삼각형 -pattern 6
// ' ' === 0
//   j0 j1 j2 j3 j4 j5 j6 j7 j8 
// i0 *  *  *  *  *  *  *  *  *  i === j log *   i < j log *
// i1 0  *  *  *  *  *  *  *  0  i >j log 0
// i2 0  0  *  *  *  *  *  0  0
// i3 0  0  0  *  *  *  0  0  0
// i4 0  0  0  0  *  0  0  0  0

// for(var i =0; i<5; i++) {
//   var star ='';
//   for(var j =0; j<9; j++) {
//     if(i === 0 && j>=0 && j<=8){
//       star += '*';
//     }else if(i === 1 && j>=1 && j<=7){
//       star +='*';
//     }else if(i === 2 && j>=2 && j<=6){
//       star +='*';
//     }else if(i === 3 && j>=3 && j<=5){
//       star +='*';
//     }else if(i === 4 && j === 4){
//       star +='*';
//     }else{
//       star +=' ';
//     }
//   }
//   console.log(star);
// }
