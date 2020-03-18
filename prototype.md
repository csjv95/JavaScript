# 프로토타입
자바스크립트는 명령형(Imperative), 함수형(Functional), 프로토타입 기반(Prototype-based) 객체지향 프로그래밍(OOP, Object Oriented Programming)을 지원하는 멀티 패러다임 프로그래밍 언어다 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어이다

자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 원시 타입(primitive type)의 값을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다

## 객체지향 프로그램이란?
객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명려영 프로그래밍의 절차지향적 관점에서 벗어나 여러개의 독립적 단위 객체들의 집합으로 그로그램을 표현하려는 프로그래밍 패러다임을 말한다

## 객체지향의 역사와 개념
객체지향 프로그래밍은 실세계의 사물이나 개념을 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작했다 실체는 특징이나 성질을 나타내는 속성을 가지고 있고 이를 통해 인식하거나 구별할수 있다 사람을 예로 들어 보자

<pre>
//사람을 예로 들어 보자
//다양한 속성중  프로그램에 필요한 속성을 간추려 표현하는것을 '추상화'라고 한다
const person = {
  name : 'SJ', //이름
  age : 27, //나이
  tall :182,  //키
  function () {
    return this.name + this.age + this.tall;
  }
}
console.log(person); // { name: 'SJ', age: 27, tall: 182, function: [Function: function] }
</pre>

<pre>
//원을 예로 들어보자
//객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료 구조이고 객체의 상태를 나타내는 데이터를 프로퍼티, 동작을 메소드라고 한다
const circle = {
  redius :5, // 프로퍼티
  
  Diameter(){ // 메소드
    return 2 * this.redius;
  },
  
  Perimeter(){ //메소드
    return 2 *Math.PI *this.redius;
  }
};

console.log(circle);  //{
  redius: 5,
  Diameter: [Function: Diameter],
  Perimeter: [Function: Perimeter]
}
console.log(circle.redius); // 5
console.log(circle.Diameter()); //10
console.log(circle.Perimeter()); //31.41592653589793
</pre>

위처럼 각각의 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만 자신의 고유한 기능을 수행하면서 다른 객체와 관계성을 갖을 수 있다 다른 객체와 메시지를 주고 받거나 데이터를 처리할 수도 있다 또는 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도 한다.

## 상속과 프로토타입
상속 : 객체지향 프로그래밍의 핵심 개념으로 어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다  자바스크립트는 프로토타입(prototype)을 기반으로 상속을 구현한다

<pre>
function Circle(radius) {
  this.radius = radius;
  this.diameter = function () {
    return 2 * radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(2);

//문제점
// Circle 생성자 함수는 인스턴스를 생성 할 때마다 지름을 구하는 메서드가 중복으로 소유한다 중복되는 것을 하나만 생성하여 공유하는것이 바람직하다

console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.diameter()); //10
console.log(circle2.diameter()); //4
</pre>

<pre>
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.diameter = function () {
  return 2 * this.radius;
};
//문제점 해결
//prototype은 Circle이 생성한 모든 인스턴스에게 모든 프로퍼티와 메서드를 상속해준다

const circle1 = new Circle(5);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.diameter()); // 10
console.log(circle2.diameter()); //4
</pre>

상속은 코드의 재사용이란 관점에서 매우 유용하다 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현에 놓으면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현없이 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다

## 프로토타입 객체
프로토타입 객체란 객체간의 상속을 구현하기 위해 사용된다

모든 객체는 [[prototype]]이라는 내부 슬롯을 가지며 이 내부 슬롯의 값은 프로토타입의 참조이다 (null인 객체는 프로토타입이 없다) [[prototype]]은 객체 생성 방식에 의해서 결정된다 즉 객체가 생성될 떄 객체 생성 방식에 따라 프로토타입이 결정되고 [[prototype]]에 저장된다 

### __proto__접근자 프로퍼티
[[Prototype]] 내부 슬롯에는 직접 접근할 수 없지만, 위 그림처럼 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 [[Prototype]] 내부 슬롯이 가리키는 프로토타입에 간접적으로 접근할 수 있다 그리고 프로토타입은 자신의 constructor 프로퍼티를 통해 생성자 함수에 접근할 수 있고, 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근할 수 있다 즉 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 접근할 수 있다

<pre>
const obj = {}; //빈 객체 생성
const parent = {x:1};

//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토 타입을 취득
obj.__proto__;
console.log(obj.x); // undefined

// setter 함수인 set__proto__가 호출되어 프로토타입을 교체
obj.__proto__=parent;
console.log(obj.x); // 1
</pre>

<ul>
<li>__proto__는 접근자 프로퍼티이다
<li>__proto__는 접근자 상속을 통해 사용된다
<pre>
const person = {
  name : 'SJ'
};
// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__'));
// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
//모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할수있다
console.log(person.__proto__ === Object.prototype);
</pre>

<li>__proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
<pre>
const parent = {};
const child = {};

child.__proto__ = parent;
parent.__proto__= child;
// TypeError: Cyclic __proto__ value
</pre>

위에서 에러가 나오는 이유는 상호 참조에 의해 프로토타입 체인이 생성 되었기 때문이다
단방향 링크드리스트로 구현되어야 하는 이유는 서로 참조하여 검색을 할때 무한루프에 빠지기 때문이다 따라서 아무런 체크없이 무조건적으로 프로토타입을 교체할수 없도록 __proto__접근자 프로퍼티를 통해 프로토타입에 접근을 교체하도록 구현되어있다
<li>__proto__접근자 프로퍼티를 코드 내에서 집적 사용하는 것은 추천하지 않는다  

__proto__ 접근자 프로퍼티는 ES5까지 ECMAScript 사양에 포함되지 않은 비표준이었다. 하지만 일부 브라우저에서 __proto__를 지원하고 있었기 때문에 ES6에서 브라우저 호환성을 고려하여 __proto__를 표준으로 채택하였다. 현재 대부분의 브라우저(IE 11 이상)가 __proto__를 지원하고 있다
하지만 코드 내에서 __proto__를 직접 사용하는 것은 추천하지 않는다 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것은 아니기 때문이다 Object.prototype을 상속받지 않는 객체를 생성할 수도 있다
<pre>
//따라서 Object.getPrototypeOf,Object.setPrototypeOf 를 대신 사용하는것이 권장된다 
const obj ={};
const parent = { x:1};

Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj,parent);
console.log(obj.x); // 1
// Object.getPrototypeOf 메소드는 ES5에서 도입된 메소드이며 IE9 이상을 지원한다. Object.setPrototypeOf 메소드는 ES6에서 도입된 메소드이며 IE11 이상을 지원한다.
</pre>
</ul>

## 프로토타입 체인
모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여 있다 자바스크립트 엔진은 객체의 프로퍼티,메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 __proto__접근자가 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다 프로토타입 체인의 종점 ,즉 프로토타입 체인의 최상위 객체는 Object.prototype이며 이객체의 프로퍼티와 메소드는 모든 객체에게 상속된다 

### 함수 객체의 prototype 프로퍼티
함수 객체는  __proto__접근자 프로퍼티 이외에 prototype 프로퍼티도 소유하며 함수 객체의 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가르킨다
일반 객체에는  prototype 프로퍼티가 없다