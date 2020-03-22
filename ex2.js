// #1 선형 검색
//선형 검색(linear search)은 배열의 각 요소를 한 인덱스씩 순차적으로 접근하면서 동작한다.
//선형 검색은 배열의 정렬 여부와 상관없이 동작하는 장점이 있지만, 배열의 모든 요소를 확인해야 하는 단점이 있다.
//시간 복잡도: O(n)
//선형 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

// function linearSearch(array,target) {
//   for(let i =0; i<array.length; i++) {
//     if(array[i] === target){
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); 
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); 

// #2 이진 검색
//while과 Math.floor사용
//function binarySearch(array, target) {
//  let start = 0;
//  let end = array.length;
//  let mid = Math.floor((end+start)/2);
//
//  while(true) {
//   if(array[mid] < target){
//      start = mid +1;
//      mid = Math.floor((end + start)/2);
//   }else if(array[mid] > target) {
//      end = mid -1;
//      mid = Math.floor((end + start)/2);
//   }else if(array[mid] === target) {
//      return mid;
//    }else{
//      return -1;
//    }
//  }
//}
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
//console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
//console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
