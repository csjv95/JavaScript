# ES6의 함수의 추가 기능

## 함수의 구분
ES6 이전까지 자바스크립트의 함수는 다른 프로그래밍 언어와는 다르게 별다른 구분없이 다양한 목적으로 사용 되었다 함수는 일반적인 함수로 호출할수 있고 new연산자와 함께 호출하여 인스턴스를 생성할 수있는 생성자 함수로서 호출할 수도 있으며 객체에 바인딩되어 메소드로서 호출할 수도 있다 이는 언뜻 보면 편리한 것 같지만 실수를 유발시킬 수 있으며 성능면에서도 좋지않다





## 화살표 함수 정의
<ol>
<li>매개 변수 선언

<pre>
//매개 변수가 여러개인 경우, 소괄호() 안에 매개 변수를 선언한다
(x,y) => {...}

// 매개변수가 1개인경우 ()를 생략할 수있다
x => {}

//매개변수가 없을경우 ()를 생략할수 없다
() => {}
</pre>

<li>함수 몸체 정의

함수 몸체가 한 줄의 문으로 구성된다면 함수 몸체를감싸는 중괄호{}를 생략할수 있다 이때 문은 암묵적으로 반환된다
<pre>
// 둘의 표현식은 동일하다
x => x * x;
x => { return x * x; }

// 매개 변수가 없는 화살표 함수
const now = () => Date.now();
now();
console.log(now()); // 1585061207840

// 함수 표현식
var now = function() {
  return Date.now();
};
now();
console.log(now()); // 1585061247846

//매개 변수가 한 개인 화살표 함수
const identity = value => value;
console.log(identity(2)); // 2

// 함수 표현식
var identity = function(value) {
  return value;
};
console.log(identity(2)); // 2

//매개 변수가 여러개인 화살표 함수
const add =(a,b) => a + b;
console.log(add(1,2)); // 3

// 함수 표현식
var sum = function(a, b) {
  return a + b;
};
console.log(add(1,2)); // 3
</pre>

함수 몸체가 여러줄의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할수없다 이때 반환값은 명시적으로 반환해야 한다
<pre>
//화살표 함수
const sum = (a,b) =>{
  const result = a + b;
  return result;
};
console.log(sum(1,2)); // 3

// 함수 표현식
var sum = function (a, b) {
  const result = a + b;
  return result;
};
console.log(sum(1,2)); // 3
</pre>

객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸 주어야 한다.
<pre>
// 둘의 표현은 동일하다
() => ({ a: 1 });
() => { return { a: 1 }; }

//화살표 함수
const create = (id,content) => ({id,content});
console.log(create(1,'javaScript')); // { id: 1, content: 'javaScript' }

//함수 표현식
const create = function(id,content) {
  return {id,content};
};
console.log(create(1,'javaScript')); // { id: 1, content: 'javaScript' }
</pre>

화살표 함수도 즉시 실행 함수로 사용할 수 있다
<pre>

</pre>

<li>
</ol>