# 객체 리터럴

## 객체
js는 객체기반의 프로그래밍 언어이다  
객체는 프로퍼티의(property)의 집합이다  
메소드 = 프로퍼티를 참조하고 조작할 수 있는 동작

## 프로퍼티
프로퍼티 = 객체의 상태를 나타내는 값이며 키(Key)와 값(value)로 구성된다  
프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

### 프로퍼티 접근
프로퍼티에 접근할려면 (.)을 이용한다 or []를 사용한다
<pre>
var person = {
  name:'choi';
}
console.log(person.name); // choi
console.log(person['name']);  // choi 반드시 []안에는 ''로 감싸야한다 그렇지않으면 식별자로 해석한다
</pre>
만약 프로퍼티가 네이밍 규칙을 준수하지않은 이름은 반드시 ['']표기법을 사용해야한다
### 프로퍼티 값 갱신,동적 생성 ,삭제
<pre>
var person = {
  name: 'choi'
};
// 프로퍼티 동적 생성
person.age = 27;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;
console.log(person); // {name: "choi"}
</pre>
## 메소드
자바스크립트에서 사용할 수 있는 모든 값을 프로퍼티 값으로 사용할 수 있다고 했다. 아직 살펴보지 않았지만 자바스크립트의 함수는 객체이다. 따라서 함수는 값으로 취급할 수 있으며 프로퍼티의 값이 될 수 있다.
프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드(Method)라 부른다. 즉, 메소드는 객체에 제한되어 있는 함수를 의미한다. 
<pre>
var square = {
  side: 5, // ← 프로퍼티
  // 정사각형의 변의 길이
  getValue: function () { // ← 메소드
    return 2 * this.side; // this는 side를 가리킨다.
  }
};
console.log(circle.getValue());  // 10
</pre>

