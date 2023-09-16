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
    - 컴포넌트를 재사용 예시

      - 문제 코드 👎

      ```javascript
      /***
       *  해당 두개의 컴포넌트는 사실 버튼의 이름을 제외하고는 전부 같은 코드를
      *  사용하고 있는 문제가 있음
      * /
      const SaveBtn = () => {
        return (
          <button
            style={{
              background: "tomato",
              border: "none",
              borderRadius: 10,
              padding: "10px 20px",
              color: "white",
            }}
          >
            Save Changes
          </button>
        );
      };

      const ConfirmBtn = () => {
        return (
          <button
            style={{
              background: "tomato",
              border: "none",
              borderRadius: 10,
              padding: "10px 20px",
              color: "white",
            }}
          >
            Confirm
          </button>
        );
      };
      ```

      - 변경코드 👍

      ```javascript
      // 각각을 컴포넌트로 보면된다 - SaveBtn, ConfirmBtn
      // 👍 const Btn = ({blackGome}) => {  형식으로도 가능 ! Javascript 이니깐!
      const Btn = (props) => {
        console.log("----------------");
        // 👉 내가 넘긴 이름에 맞춰서 Object 형식으로 들어가 있음
        console.log(props);
        console.log("----------------");

        return (
          <button
            style={{
              // ✅ props.name 있고 없고에 따라서 버튼색 변경
              background: props.name ? "tomato" : "blue",
              border: "none",
              borderRadius: 10,
              padding: "10px 20px",
              color: "white",
            }}
          >
            {props.balckGom}
          </button>
        );
      };

      const App = () => {
        return (
          <div>
            {
              // 👉 내가 지정한 이름을 Key:value 형식으로 컴포넌트로 전달 된다.
            }
            <Btn balckGom="Save Changes" name="Yoo" />
            <Btn balckGom="Continue" />
          </div>
        );
      };
      ```

<hr/>

## create-react-app 사용 방법

- React 개발에 필요한 기본 세팅이 되어있어서 편하게 개발 할 수 있다.
- 방법
  - 1 . Node 설치
  - 2 . 경로 지정 후 `npx create-react-app 이름`으로 프로젝트를 생성 할 수 있다.
- 구조
  - 작업 해야하는 메인 폴더는 `src`이다.
  - index.js를 확인해보면 익숙한 코드가 있다.
    - ```javascript
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      ```
    - 설정이 자동으로 되어있기에 해당 코드를 토대로 `index.html`에 랜더링해서 보여주는 것이다.
- 장점
  - `auto-reload`를 지원 코드를 바꾸만 알아서 새로 적용해 준다
  - 기본적으로 필요한 설정이 되어있다.

<hr/>

## prop-types

- 설치
  - 진행 중인 프로젝트 파일로 이동
  - `npm i rpop-types`를 사용해서 설치해주자.
  - npm을 통한 설치가 에러가 있을 경우
    - `npm install --global yarn`을 통해 yarn을 설치
    - `yarn add prop-types`를 통해 설치해준다.
- 사용방법
  - 설치가 완료되면 import 하여 사용해주자.
    - `import PropTypes from "prop-types";`
    - ```javascript
      Button.propTypes = {
        text: PropTypes.string.isRequired,
      };
      ```

<hr/>

## Style

- 일반적인 Style.css 적용
  - 방법
    - css파일을 생성한다.
    - index.js에 import 시켜준다.
      - `import "./style.css";`
  - 문제점
    - import한 css파일의 모든 불필요한 css까지 다가져온다. ( 비효율적 )
    - 전역적으로 적용하려면 상관없지면 전역적으로 지정하고 싶지 않은거 까지 적용될 수 있다.
- css를 모듈화하여 적용
  - 방법
    - `xx.module.css`로 css파일을 생성하고 내부는 일반 css처럼 작성한다.
      - 단 Tag지정이 아닌 class명으로 만들어주자.
    - `import styled from "./Button.module.css";` import 해준다.
    - ```javascript
      function Button({ text }) {
        // Object처럼 클래스명으로 불러와서 사용한다
        return <button className={styled.btn}>{text}</button>;
      }
      ```
  - 장점
    - class명이 암호화되어 붙여진다.
      - 따라서 같은 class명이 겹쳐도 곤란한 상황이 없음! 독립적으로 움직일 수 있게 되었다.
    - Object 형식처럼 사용이 가능하다.
    - moudule 처럼 사용이 가능하다. 따라서 다양한 곳에 그냥 Import만하면 적용이 가능함

<hr/>

## UseEffect

- 일반적인 `useState()`를 사용하면 해당 값이 업데이트 될 때마다 해당 부분이 재랜더링이 된다.
  - 여기서 만약 한번만 불러도 되는 API가 들어있다면? 계속해서 요청하되는 문제가 발생
- 위와 같은 문제를 막기위해 처음 랜더링 시 단 한번만 실행 될 수 있는 `useEffect()`가 존재 하는 것이다.
- 💬 중요
  - `useEffect()`가 실행 되는 시점은 컴포넌트의 렌더링 이후 이다!
    - 나중에 로직이 꼬일 위험이 있으니 잊지 말자!!

### 사용 방법

```javascript
// ✅ import 해준다 - create react를 사용하여 프로젝트를 생성 하였기에 가능
import { useState, useEffect } from "react";

function App() {
  // 👉 일반적인 useState()이기에 계속 랜더링 됨
  const [count, setCount] = useState(0);
  const clickEvent = () => {
    console.log("I run all Time!!!");
    setCount((current) => current + 1);
  };

  // 👉 한번만 실행 됨!
  // 나중에 코드가 안 꼬일려면 , useEffect 내에 코드가 실행되는 시점이 컴포넌트의 렌더링 이후 이다.
  // 컴포넌트 함수 내에 있는 일반적인 다른 코드들보다도 use effect가 늦게 실행됨!!
  useEffect(() => {
    console.log("Call API - 무조건 한번만 실행 된다!!");
  }, []);

  return (
    <div>
      {count}
      <button onClick={clickEvent}>count</button>
    </div>
  );
}

export default App;
```

<hr/>

## UseEffect - 감시자 옵션 추가

- 위에서 사용한 `UseEffect()`의 경우 한반 실행 된 이후 실행되되지 않지만 감시할 대상을 추가해주면 해당 대상의 값의 변경될 경우에만 이밴트를 실행 시킬 수 있다.
- 내부에서 script를 통해 조건식 컨트롤 또한 가능하다.

### 사용 방법

```javascript
import { useState, useEffect } from "react";

function Div({ text }) {
  // useEffect 한번만 실행
  useEffect(() => {
    console.log("한번만 실행");
  }, []); // 💬 "[]"가 없으면 렌더링 시 계속 실행 된다.

  // count
  const [count, setCount] = useState(0);
  const clickEvent = () => setCount((current) => current + 1);
  useEffect(() => {
    console.log("카운트가 변경 될 때만 실행 됨!", count);
  }, [count]);

  // keywork
  const [keyword, setKeywork] = useState("");
  const onChange = (e) => setKeywork((currnet) => (currnet = e.target.value));
  useEffect(() => {
    if (!keyword) return; // 💬 조건문을 넣어서 사용 가능
    console.log("키워드가 변경 될 때만 실행 됨!", keyword);
  }, [keyword]);

  // 키워드 카운터 둘다 변경 될때만 실행
  useEffect(() => {
    console.log("키보드 카운터 둘중 하나라도 변경되면 실행");
  }, [keyword, count]);

  return (
    <div>
      <hr />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <button onClick={clickEvent}>count</button>
    </div>
  );
}
```
