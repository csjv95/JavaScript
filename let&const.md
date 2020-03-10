# let & const
let과 const는 var의 단점을 보안 하기 위해서 ES6에서 새롭게 도입된 키워드이다  

## let
<pre>
var hi = 27;  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다
var hi = 50;  // 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작해서 hi란 변수에 생겨 값이 재할당되어 50이라는 값을 가지게 되어서 변수가 가지고 있는 값이 의도하지 않게 바뀔수도 있다

let hello = 27; // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다
let hello = 50; // SyntaxError: Identifier 'hello' has already been declared
</pre>  

## block level scope
var 키워드로 선언한 변수는 오직 함수 코드 블록 내에서만 지역 변수로 인정하는 함수 레벨 스코프를 따르지만 let과 const는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다

<pre>
let global = 1;

function test() {
  let local = 2;
  let global = 2

  console.log(local); // 2
  console.log(global);  //2

  for(let i = 0; i<2; i++){
    console.log(i); // 0,1
  }
  console.log(local); //2
  console.log(global);  //2
}
test();
console.log(local); // ReferenceError: local is not defined
console.log(global);  // 1
</pre>  

## 호이스팅
자바스크립트는 ES6에서 도입된 let,const를 포함한 모든 선언들을 호이스팅한다 하지만 let,const를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작을 한다
<pre>
// var 키워드는 런타임 이전에 호스팅되어 선언되어 undifine으로 초기화되어서 선언문 이전에 변수를 참조할수 있다
console.log(hi);  // undifine

var hi;
console.log(hi);  // undifine

hi = 27;
console.log(hi); // 27;
</pre>

<pre>
// let키워드로 선언한 변수는 선언과 초기화 단계가 분리 되어 진행된다 암묵적으로 선언 단계가 실행되지만 초기화 단계는 변수 선언문을 시작할때 실행된다

console.log(hi);  // ReferenceError: hi is not defined  변수가 초기화 되지않아 참조를 할 수없다

let hi;
console.log(hi);  //undifine 변수 초기화 단계

hi = 27;
console.log(hi);  // 27 할당 되어서 27이 나온다
</pre>

## const
const는 상수를 선언하기 위해 상용하지만 반드시 상수만을 위해 사용하지는 않으며 재할당이 금지된다 또한 프로그램 전체에서 공통으로 사용하여서 나중에 유지 보수성이 좋아진다

<pre>
const hi = 1; // const는 선언과 동시에 할당이 이루어 져야한다 그렇지 않으면 문법 에러가 발생한다

// const는 상수로 대부분 사용하기 때문에 어떤의미로 사용했는지 명확하게 구분하기 위해서 일반적으로 대문자를 사용하며 여러 단어로 이루어진경우는 _를 사용하여 구분한다
const AGE = 26; // 대문자로 표기
console.log(AGE);  //26
AGE =50;  //const로 인해 재할당이 금지된값이다
console.log(AGE);  // TypeError: Assignment to constant variable.
</pre>

### const 객체
위에서 보듯이 const에 원시값을 넣으면 당연히 변경 불가였지만 객체를 할당하면 값을 변경할수 있다 <strong>const는 재할당을 금지할뿐 객체의 내용을 변경하는것은 가능하다</strong>

<pre>
// const에 객체를 할당해서 객체의 값을 변경 가능하다
const car = {
  brand : 'Hyundai'
};
car.brand = 'BMW';
console.log(car); //{ brand: 'BMW' }
</pre>

## 사용성
<ul>
<li>변수 선언에서는 기본적으로 const를 사용하며 재할당이 필요한 경우에는 let을 사용하는 편이 좋다
<li>ES6에서는 var키워드는 사용하지 않는다
<li>스코프는 최대한 좁게 만든다
<li>변경이 발생하지 않고 읽기 전용으로 사용하는 원시값과 객체에는 const를 사용하여 재할당을 금한다
</ul>
