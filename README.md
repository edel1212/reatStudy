# reatStudy

- 기존의 Front는 HTML을 작성하고 그 Dom요소에 javsciprt를 통해 이벤트를 주는 형식이였다.
- React JS에서는 모든 것이 `Javascript`로써 시작해 그것들이 HTML로 변환 되는것이다 ( 순서가 반대라고 생각하면 쉽다 )
  - 해당 방법이 강력한 이유는 React JS는 업데이터가 필요한 element 요소를 React에서 만들고 이벤트도 같이 처리하기 떄문에 인터렉티브하게 데이터 위주로 화면이 그려질 수 있는 것이다.
- JSX란?
  - javascript를 확장한 문법이다.
  - React의 Element요소를 쉽게 만들수있도록 도와준다.
  - HTML과 흡사하게 사용할 수 있다.
  - 하지만 웹이 이해할수 있는것은 HTML, CSS, Javasript이기 때문에 JSX문법을 이해할수 없다
    - 따라서 javascript로 변환해주는 코드가 필요함
  - JSX만의 문법이 있다 - 맞춰 사용하지 않으면 에러 발생
    - `<h1 class="yoohg">` => `<h1 className="yoohg">`
    - `<lable for="hello">` => `<lable htmlFor="hello">`
- 주요기능
  - `Reat.useSate(초기설정값)` : 의 반환값은 배열로 들어가있다
    - `[값, 해당 값수정 함수]` : 해당 배열은 0번에는 값 1번에는 수정할 수 있는 "함수"가 들어가 있다
    - 1번 인덱스의 함수를 사용하면 값이 변하면서 값이 변한 부분만 `자동으로 재렌더링` 해준다!
