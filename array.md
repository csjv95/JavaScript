# 배열
배열은 여러개의 값을 순차적으로 나열한 자료 구조이다  
배열이 가지고 있는 값을 요소라고 하며 자바스크립트의 모든 값은 배열의 요소가 될 수 있다(원시값, 객체,함수,배열 등)  
배열의 요소는 자신의 위치를 가지고 있는데 0 이상의 정수인 인덱스를 가지고 있으며 인덱스를 통해 요소에 접근할수 있다

<pre>
// 배열 리터럴
const animal = ['dog', 'cat', 'mouse'];

// 배열은 인덱스로 값을 참조 할수있다
animal[0]; // dog
animal[1]; // cat
animal[2]; // mouse

// 배열은 length은 property를 가지고 있다
animal.length // 3

//배열의 타입은 객체이다
consle.log(typeof animal) // object

//배열은 리터럴 또는 Array 생성자 함수로 생성할수 있으며 프로토타입 객체는 Array.prototype이다
const num = [1,2,3,];
arr.constructor === Array // true
Object.getPrototypeOf(num) === Array.prototype // true
</pre>

## 배열은 객체이지만 일반 객체와의 차이 점과 특징이 있다
|구분|객체|배열|
|----|---|----|
|구조|프로퍼티 키와 프로퍼티 키의값|인덱스와 요소|
|값의 참조|프로퍼티 키|인덱스|
|값의순서|순서와 상관없음|인덱스 마다 숫자가 있음|
|length 프로퍼티|없음|있음|

객체와 배열을 구분하는 가장 명확한 차이는 값의 순서와 length 프로퍼티를 갖는 배열은 반복문을 사용해서 값에 접근하기 적합한 자료구조이며 배열의 장점은 처음부터 순차적으로 요소에 접근할 수도 있고 마지막부터 꺼꾸로 요소에 접근할 수도 있으며 특정 위치부터 순차적으로 요소에 접근할 수도 있다는 것이다 이는 배열이 인덱스, 값의 순서와 length 프로퍼티를 갖기 때문에 가능한 것이다
<pre>

const num = [1,2,3];
//반복문으로 자료 구조를 순회하기 위해서는 자료 구조의 길이를 알아야 한다
for(let i = 0; i < num.length; i++) {
  console.log(arr[i]); // 1 2 3
}
</pre>

## 자바스크립트의 배열은 배열이 아니다
자바스크립트의 배열은 배열의 요소를 위한 각각의 동일한 메모리 공간을 갖지 않아도 되며 연속적으로 이어져 있지 않을수도 있다 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소배열이라고 한다

### 밀집배열
일반적으로 배열이라는 자료 구조의 개념은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료 구조를 말하며 이것은 배열의 요소는 하나의 타입으로 통일 되어 있으며 서로 연속적으로 인접해 있다 이러한 배열을 밀집 배열이라고 한다

<pre>
// 밀집 배열의 구조 예시
const arr = [1,2,3];
메모리 주소  1000 1008 1016
배열의 값     1   2   3
인덱스        0   1   2
</pre>

밀집 배열의 요소는 동일한 크기를 갖으며 빈틈없이 연속적으로 이어져 있으므로 인덱스를 통해 단 한번의 연산으로 임의의 요소에 접근(임의 접근(Random access), 시간 복잡도 O(1))할 수 있다 이는 매우 효율적이며 고속으로 동작므로 배열은 인덱스를 통해 효율적으로 요소에 접근할 수 있는 장점이 있지만 정렬되지 않은 배열에서 특정한 값을 탐색하는 경우 배열의 모든 요소를 처음부터 값을 발견 할때까지 찾으면 시간이 오래 걸린다 또한 배열에 요소를 삽입,삭제를 하면 배열 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점이 있다

### 희소 배열
위에서 보았듯이 자바 스크립트는 희소배열을 문법적으로 허용하며 더욱 엄밀히 말하면 일반적인 의미의 배열이 아닌 배열의 동작을 흉내낸 특수한 객체이다 배열은 인덱스를 프로퍼티 키로 갖고 있으며 length 프로퍼티를 갖는 특수한 객체이다 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으며 어떤 타입의 값이라도 배열의 요소가 될 수 있다

<pre>
const arr = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(arr.length); // 4
console.log(arr); // [empty, 2, empty, 4]

// 배열 arr에는 인덱스가 0, 2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/
</pre>
자바 스크립트는 문법적으로 희소 배열을 허용하지만 희소 배열을 사용 하지 않는것이 가장 좋으며
배열의 기본 개념과 맞지 않으며 성능적인 면에서도 떨어진다 그러므로 배열을 만들때 희소 배열을 생성하지 않도록  주의하며 배열에는 같은 타입의 요소를 연속시키는것이 가장 최선이다

### 자바스크립트 배열 VS 일반적인 배열
|배열|장점|단점|
|---|----|----|
|일반적인 배열|인덱스로 배열 요소에 빠르게 접근가능|특정요소 탐색 또는 삽입,삭제경우 효율이 좋지않다|
|자바스크립트 배열|해시 테이블로 구현된 객체이므로 인덱스로 배열 요소에 접근하는 경우 일반적인 배열보다 성능적인 면서에 느림|특정 요소를 탐색 또는 삽입 삭제하는 경우에는 일반적인 배열보다 빠른 성능 기대할수 있다|

자바스크립트 배열은 이런 구조적인 단점을 보안하기 위해서 모던 자바스크립트 엔진은 배열을 일반 객체와 구별하여 보다 배열 처럼 동작하도록 구현 하였다

## 배열 생성 방식
객체와 마찬가지로 배열도 다양한 생성 방식이 있다 가장 일반적이고 간편한 생성 방식은 배열 리터럴을 사용하는 것이다

### 배열 리터럴
배열 리터럴은 0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶으며 객체 리터럴과 다르게 프로퍼티 이름이 없고 값만 존재한다

<pre>
const arr = [1,2,3];
console.log(arr.length); // 3
for(let i = 0; i< arr.length; i++) {
  consle.log(arr[i]) // 1 2 3
}
</pre>

### Array 생성자 함수
Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다 Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작한다

<pre>
// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다 
const arr1 = new Array(1, 2, 3);
console.log(arr1); // [1, 2, 3]
console.log(arr1.length); // 3

//전달된 인수가 1개이고 숫자인 경우, 인수를 length 프로퍼티의 값으로 갖는 배열을 생성한다.
const arr2 = new Array(10);
console.log(arr2); //[ <10 empty items> ]
console.log(arr2.length); // 10

// 전달된 인수가 1개이지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다
const arr2 = new Array({}); 
console.log(arr2); // [{}]
</pre>

### Array.of
ES6에서 새롭게 도입된 Array.of 메소드는 전달된 인수를 요소로 갖는 배열을 생성한다
Array.of는 Array생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다

<pre>
const arr = Array.of(1);
const arr1 = Array.of(1,2,3,);
const arr2 = Array.of('string');
const arr3 = Array.of([]);

console.log(arr); //  [ 1 ]
console.log(arr.length); // 1

console.log(arr1); //[ 1, 2, 3 ]
console.log(arr1.length); // 3

console.log(arr2); //[ 'string' ]
console.log(arr2.length); // 1

console.log(arr3); // [ [] ]
console.log(arr3.length); // 1
</pre>

### Array.from
ES6에서 새롭게 도입된 Array.from 메소드는 유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 변환하여 새로운 배열을 생성한다

<pre>
// 문자열은 이터러블이다.
const arr1 = Array.from('Hello World');
console.log(arr1); // ['H', 'e', 'l', 'l','o', ' ', 'W', 'o','l', 'r', 'd']

// 유사 배열 객체를 새로운 배열을 변환하여 반환한다.
const arr2 = Array.from({ length: 2, 0: 'H', 1: 'i' });
console.log(arr2); // ['H', 'i']

// Array.from의 두번째 인수로 배열의 모든 요소에 대해 호출할 함수를 전달할 수 있다.
// 이 함수는 첫번째 인수에 의해 생성된 배열의 요소값괴 인덱스를 순차적으로 전달받아 호출된다.
const arr3 = Array.from({ length: 10 }, function (v, i) { return i; });
console.log(arr3); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</pre>

## 배열의 메소드
배열의 프로토타입인 Array.prototype은 배열을 다룰 때 필요한 메소드를 제공한다 배열 메소드는 결과물을 반환하는 패턴이 2가지이다 원본배열을 직접 변경하는 메소드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메소드가 있다 

<pre>
//push 메소드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 값을 반환한다(배열을 집적 변경한다)
const arr =[1];
arr.push(2)
console.log(arr); // [ 1, 2 ] 집적변경

const arr4 = [3,4];
let change = arr4.push(1,2);
console.log(change); //4 length의 값을 반환한다

// concat 메소드는 원본 배열을 집적 적으로 변경하지않고 새로운 배열을 생성하여 반환한다
const arr1 =[1];
arr1.concat(3) //concat으로 3을 넣어도 arr1을 불러도 값이 변경되지 않는다
console.log(arr1); // [ 1 ]

const arr2 = arr1.concat(2) //arr2를 생성하고 arr1에 concat으로 새로운 배열을 생성하여 1,2를 넣는다
console.log(arr2); // [ 1, 2 ]
</pre>

ES5부터 도입된 배열 메소드는 대부분 원본 배열을 직접 변경하지 않지만 초창기 배열 메소드는 원본 배열을 직접 변경하는 경우가 많았다 원본배열을 직접 변경하는 것은 외부 상태를 직접 변경하는 부수적인 효과가 있으므로 사용에 주의해야 하며 가급적 새로운 배열을 생성하여 반환하는 매소드를 사용하는 편이 좋다

<ul> <strong>사용빈도가 높은 배열매소드들</strong>
<li>Array.isArray  

매서드를 보면 알수 있듯이 Array.isArray는 주어진 인수가 배열이면 ture 아니면 false를 반환한다
<pre>
const arr = [1,2,3];
console.log(Array.isArray(arr)); // ture
Array.isArray([]); //ture
Array.isArray(new Array()); // ture

const arr = {
  0 : 1,
  1 : 2,
  length: 2
}
console.log(Array.isArray(arr)); // false

const arr1 = Array.from({length :2,0:1,1:2});
console.log(Array.isArray(arr1)); //ture 객체로 변환하여 새로운 배열을 만드는 매소드를 사용했기 때문에 배열이다
</pre>

<li>Array.prototype.indexOf

indexOf는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다
<pre>
function indexOf(x,y) {
  const arr = [1,2,3,4,5];
  
  console.log(arr.indexOf(x,y));
}
indexOf(2); // 1
indexOf(6); //-1 찾는 값이 없으면 -1을 반환한다
indexOf(1,2); //-1 두번째인수는 검색을 시작할 인덱스이다
</pre>

<li>Array.prototype.pop
pop은 원본배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다 막약 빈 배열이면 undifined를 반환한다

<pre>
const arr = [1, 2];

let result = arr.pop();

console.log(result); // 2 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
console.log(arr); // [1] 메소드는 원본 배열을 직접 변경한다.
</pre>

<li>Array.prototype.unshift & shift

unshift 메소드는 인수로 전달 받은 모든값을 원본 배열의 선두에 추가하고 shift는 제거한다 둘다 변경된 length값을 반환한다(원본 배열을 집적 변경한다)

<pre>
const arr = [1,2];

const change = arr.unshift(0);
console.log(change); // 3 앞에 값을 추가하고 변경된 length 반환
console.log(arr); // [ 0, 1, 2 ] 집적적으로 원본을 변경

const change2 = arr.shift();
console.log(change2); // 0 배열의 처음 요소를 제거 하고 length값을 반환한다
console.log(arr); // [ 1, 2 ] 배열에 집적적으로 변경
</pre>

<li>Array.propotype.splice

splice는 원본 배열의 중간에 요소를 추가하거나 제거하는 경우 사용하며 3개의 매개변수를 가지고 있다

start : 원본 배열의 요소를 제거하기 시작할 인덱스이다 start 만을 지정하면 원본 배열의 start부터 모든 요소를 제거한다 start가 음수인 경우, 배열의 끝에서의 인덱스를 나타낸다 만약 start가 -1이면 마지막 요소를 가리키고 -n이면 마지막에서 n번째 요소를 가리킨다

deleteCount : 원본 배열의 요소를 제거하기 시작할 인덱스인 start부터 제거할 요소의 개수이다. deleteCount가 0인 경우, 아무런 요소도 제거되지 않는다 (옵션)

items : 제거한 위치에 삽입될 요소들의 목록이다. 생략할 경우, 원본 배열에서 지정된 요소들을 제거만 한다. (옵션)
<pre>
const arr = [3,2,1,4];

arr.splice(0,3,1,2,3); // 0에서부터 3까지 제거하고 1,2,3을 추가한다
console.log(arr); //[ 1, 2, 3, 4 ]

// 배열에서 특정요소를 제거할려면 indexOf와 splice를 이용해 제거할수있다
const arr = [1,2,3,4,5];

// 배열 array에서 v 요소를 제거한다. v 요소가 여러 개 존재하더라도 하나만 제거한다.
function remove(array, v) {
  // 제거할 요소의 인덱스
  const index = array.indexOf(v);
  console.log(arr.indexOf(v)); // 1,10
  console.log(index); //1,10

  // 제거할 요소가 있다면 제거한다.
  if (index !== -1) array.splice(index, 1);

  return array;
}

console.log(remove(arr, 2)); // [ 1, 3, 1, 2 ]
console.log(remove(arr, 10)); // [ 1, 3, 1, 2 ]
</pre>

<li>Array.prototype.slice
slice는 2개의 매개변수를 가지며 인수로 전달된 범위의 요소들을 복사하여 반환하다(원본배열 변경하지 않는다)  

start => 복사를 시작할 인덱스이다 음수의 경우 끝에서 인덱스를 나타낸다 예를 들어 slice(-3)은 배열의 마지막 3개의 요소를 반환한다

end = > 복사를 종료할 인덱스이다 인덱스에 해당하는 요소는 복사되지 않으며 옶션이며 기본값은 length 값이다

<pre>
const arr = [1,2,3];

const result = arr.slice(0,2);

console.log(result); //[1,2] 0에서부터 2번쨰 인덱스 앞까지 
console.log(arr); [1,2,3]
</pre>
얕은 복사와 깊은 복사
객체를 프로퍼티 값으로 같는 경우 얕은 복사는 한 단계까지만 복사하는 것을 말하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다
얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체이다 원본과 복사본은 <stong>참조값</strong>이 다른 별개의 객체이다 하지만 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하여 원시 값처럼 안전한 복사본을 만드는 차이가 있다

<li>Array.prototype.join

join은 원본 배열의 모든 요소를 문자열로 변환한 후 인수로 전달받은 값 즉 구분자로 연결한 문자열을 반환하며 구분자는 생략 가능하며 기본 구분자는 ','이다
<pre>
const arr = [1,2,3,4];

let result = arr.join(); //기본 구분자는 ,
console.log(result); // 1,2,3,4

result = arr.join(':');// :
console.log(result); // 1:2:3:4
</pre>

<li>Array.prototype.reverse

reverse는 원본 배열의 요소 순서를 반대로 변경해야한다(원본배열이 변경된다)반환값은 변경된 배열이다
<pre>
const arr = [1,2,3];
const result = arr.reverse();

console.log(result); [3,2,1]
console.log(arr); // [3,2,1] 원본값이 변경된다
</pre>

<li>Array.prototype.fill

ES6에서 새롭게 도입된 fill은 인수로 전달 받은 값을 요소로 배열의 처음부터 끝까지 채운다(원본에 배열이 변경된다)

<pre>
const arr =[1,2,3];

arr.fill('Hi'); // 첫번째 인수로 전달 받은 값을 요소로 배열의 처음부터 끝까지 채운다
console.log(arr); // [ 'hi', 'hi', 'hi' ]

arr.fill(0,1); // 두번쨰는 요소 채우기를 시작 인덱스를 정할수있다
console.log(arr); // [ 'Hi', 0, 0 ] index 1부터 0으로 채우기

arr.fill(1,0,1);// 세번째는 요소 채우기를 멈출 인덱스를 정할수있다
console.log(arr); //[ 1, 0, 0 ]
</pre>

<li>Array.prototype.includes
</ul>
