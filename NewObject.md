# 생성자 함수
생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다 생성자 함수에 의해 생성된 객체를 인스턴스라고 하며 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp 등의 빌트인(built-in, 내장) 생성자 함수를 제공한다

<pre>
const person = new Object(); // person 이라는 객체 생성

person.name = 'choi'; // name이라는 프로퍼티를 추가하고 'choi'를 넣는다
person.sayHello = function () { //sayHello 함수를 추가한다
  console.log('Hi my name is'+ this.name);
};

console.log(person);  // { name: 'choi', sayHello: [Function] }
person.sayHello();  // Hi my name is choi
</pre>

<pre>
// String 생성자로 String 객체 생성
const str = new String('choi');
//const str = new String(1); // [String: '1']
//const str = new String(ture); //  [String: 'ture']
console.log(typeof str);  // object
console.log(str);  // [String: 'choi']

//Number 생성자로 Number 객체 생성
const num = new Number(27);
//const num = new Number('hi'); // [Number: NaN]
// const num = new Number(false); // [Number: 0]
console.log(typeof num);  // object
console.log(num); // [Number: 27]

//boolean 생성자로 boolean 객체 생성
const bool= new Boolean(true);
//const bool= new Boolean('hi');  // [Boolean: true]
//const bool= new Boolean(1); // [Boolean: true]
console.log(typeof bool); // object
console.log(bool);        // [Boolean: true]

//Function 생성자로 Function 객체 생성
const func = new Function('x','return x + x');
console.log(typeof func); // function
console.log(func);  // [Function: anonymous]

//Array 생성자로 Array 객체(배열) 생성
const arr = new Array('1',true,1);
console.log(typeof arr);  // object
console.log(arr); // [ '1', true, 1 ]

//RegExp 생성자로 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

//date생성자로 date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // 2020-03-08T10:54:16.907Z (대한민국 표준시)
</pre>

## 객체 리터럴에 의한 객체 생성 방식의 장점과 단점
장점 : 생성 방식이 직관적이고 간편하다  
단점 : 단 하나만의 객체를 생성한다,동일한 프로퍼티를 여러개 생성해야 될경우 매번 반복되는 프로퍼티를 기술해야한다 

## 내부 메소드 Call & Construct
<pre>
// 함수는 객체이다.
function age() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
age.prop = 27;

// 함수는 객체이므로 메소드를 소유할 수 있다.
age.method = function () {
  console.log(this.prop);
};
age.method(); //27
console.log(age.method()); //27 undefined
console.log(age.prop); //27
console.log(age);//[Function: age] { prop: 27, method: [Function] }

age(); // 일반 함수 호출, Call이 호출
new age(); // 생성자 함수로써 호출, Construct가 호출
</pre>