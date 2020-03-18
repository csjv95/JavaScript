# 빌트인 객체

## 자바스크립트 객체의 분류

자바스크립트의 객체는 아래와 같이 크게 3개의 객체로 분류할 수 있다.

<ul>
<li>표준 빌트인 객체

표준 빌트인 객체는(standard built-in objects / native objects / global objects) ECMAScript 사양에 정의된 객체를 말하며 애플리케이션 전역의 공통 기능을 제공한다 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경과 관계없이(Browser,Node.js) 언제나 사용할 수 있다 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다 따라서 별도의 선언없이 전역 변수처럼 언제나 참조할 수 있다
<li>호스트 객체

호스트 객체는 ECMAScript 사양에 정의되어 있지는 않지만 자바스크립트 실행 환경(Browser,Node.js))환경에서 추가적으로 제공하는 객체를 말한다 브라우저 환경에서는 DOM,BOM,Canvas,XMLHttpRequst,fetch,requestAnimationFrame,SVG,Web Strong,Web Component,Web worker와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고 Node.js 환경에서는 Node.js고유의 API를 호스트 객체로 제공한다

<li>사용자 정의 객체

사용자가 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 집적 정의 하여 만들어낸 객체를 의미한다
</ul>

## 표준 빌트인 객체
Math,Reflect,JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체이다 생성자 함수 객체인 표준 빌트인 객체는 프로토타입 메소드와 정적 메소드를 제공하고 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적 메소드만을 제공한다 예를 들어 표준 빌트인 객체인 String,Number,Boolean,Function,Array,Date는 생성자 함수로 호출하여 인스턴스르 생성 할수 있다

<pre>
//생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체이다 예를 들어 표준 빌트인 객체인 String을 생성자 함수로서 호출하여 생성한 String 인스턴스의 프로토타입은 String.prototype이다

const strObj = new String('Choi'); // strObj를 String 생성자 함수로 객체 생성
console.log(typeof strObj); //object
console.log(strObj); //[String: 'Choi']
console.log(Object.getPrototypeOf(strObj) === String.prototype); //ture
</pre>

표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 메소드를 제공한다 또한 인스턴스 없이도 호출 가능한 정적 메소드도 제공한다 표준빌트인 객체인 Nunber를 생성자 함수로 호출하여 생성한 Number 인스턴스는 Number.prototype이 제공하는 다양한 기능의 프로토타입 메소드를 사용할 수 있다

<pre>
const numObj = new Number(1.5); //numObj를 Number생성자 함수로 객체 생성 1.5
console.log(typeof numObj); // objcet
console.log(numObj); // Number{1.5}
console.log(numObj.toFixed); // 2 toFixed는 프로토타입 메소드이다,소수점자리를 반올림하여 반환한다
console.log(Number.isInteger);  //false integer인지 아닌지 검사하여 boolean값으로 반환한다
</pre>

## 원시값과 래퍼 객체
문자열이나 숫자, 불리언 등의 원시값이 있음에도 불구하고 문자열, 숫자, 불리언 객체를 생성하는 String, Number, Boolean 등의 표준 빌트인 생성자 함수가 존재하는 이유는 무엇일까?

표준 빌트인 객체가 제공하는 프로토타입 메소드를 사용하려면 반드시 인스턴스를 생성하고 인스턴스로 프로토타입 메소드를 호출해야 한다 원시값으로 표준빌트인 객체의 프로토타입 메소드를 호출하면 정상적으로 동작한다 이는 원시값인 문자열 ,숫자,불리언 값의 경우 마치 객체처럼 이들 원시값에 대해 마침표 표기법으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해 주기 때문이다 원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하고 생성된 객체로 프로퍼티에 접근하거나 메소드를 호출하고 다시 원기값으로 되돌린다 이처럼 문자열,숫자,불리언 값에 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다

<pre>
//자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하고 생성된 객체로 프로퍼티에 접근하거나 메소드를 호출하고 다시 원기값으로 되돌린다 이처럼 문자열,숫자,불리언 값에 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다

const name = 'SJ'; // name 변수를 선언하여 문자를 할당함
console.log(name.length); // 2 원시값이 들어있는 변수에 마침표(.)표기법으로 접근하여 length메서드를 사용하였다 
console.log(name.toUpperCase()); //Sj 원시값이 들어있는 변수에 마침표(.)표기법으로 접근하여 toUpperCase를 사용하였다
console.log(typeof name); //string 원시값이다
</pre>