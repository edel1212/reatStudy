# reatStudy

- 기존의 Front는 HTML을 작성하고 그 Dom요소에 javsciprt를 통해 이벤트를 주는 형식이였다.
- React JS에서는 모든 것이 `Javascript`로써 시작해 그것들이 HTML로 변환 되는것이다 ( 순서가 반대라고 생각하면 쉽다 )
  - 해당 방법이 강력한 이유는 React JS는 업데이터가 필요한 element 요소를 React에서 만들고 이벤트도 같이 처리하기 떄문에 인터렉티브하게 데이터 위주로 화면이 그려질 수 있는 것이다.
- JSX란?
  - 과거에는 `jsx`파일을 만들어서 class문법을 사용 했으나 버전업으로 js파일 내에서 함수를 통해 jsx문법 사용
    - 따라서 .js파일만으로도 React 구현이 가능해졌다.
  - javascript를 확장한 문법이다.
  - React의 Element요소를 쉽게 만들수있도록 도와준다.
  - HTML과 흡사하게 사용할 수 있다.
  - 하지만 웹이 이해할수 있는것은 HTML, CSS, Javasript이기 때문에 JSX문법을 이해할수 없다
    - 따라서 javascript로 변환해주는 코드가 필요함
  - JSX만의 문법이 있다 - 맞춰 사용하지 않으면 에러 발생
    - `<h1 class="yoohg">` => `<h1 className="yoohg">`
    - `<lable for="hello">` => `<lable htmlFor="hello">`
- 특징
  - 새로운 데이터가 들어올 떄마다 해당 component를 새로고침`Refesh`해준다.
  - 리엑트는 이전 버전의 코드를 사용해도 에러가 생기지 않는 다는 최고의 장점이 있다.
    - 따라서 과거코드를 복사 붙여넣기해서 사용해도 가능
    - 최신 소스에 과거 코드를 넣거나 과거 코드에 최신 방법을 사용해도 에러가 발생하지 않음
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
  - 2 . 경로 지정 후 `npx create-react-app 이름`으로 프로젝트를 생성 할 수 있다. or `npx create-react-app .`로 현재 경로에 프로젝트가 생성된다.
- 구조
  - 작업 해야하는 메인 폴더는 `src`이다.
  - index.js를 확인해보면 익숙한 코드가 있다. [ 💬 실제로 화면이 그려지는 소스가 있는 곳이다 ]
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
- 서버 실행 방법
  - `npm start`를 통해 서버를 실행 할 수 있다.
- 배포 방법
  - `npm run build` 명령어를 실행하면 배포파일이 생성된다. - 경로 : 프로젝트 -> build 폴더 내 생성
  - 해당 생성된 내부 파일이 배포버전용 파일이되는것이다.
  - `npx serve -s build`

<hr/>

## 유용한 익스텐션

- `react snippet` 컴포넌트룰 쉽게 생성할 수 있도록 도와준다.
  - `rafc` : 화살표 함수 컴포넌트를 생성과 함께 export하고, 컴포넌트가 있는 js파일명이 div안에 작성됨
  - `rsc` : 빈 div를 가진 화살표 함수 컴포넌트 생성

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
- `useEffect(()=>{},[])`에서 "[]"를 안 넣어주면 감시 대상이 없기에 랜더링 시 실행된다 꼭 "[]" 넣어주자

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

<hr/>

## UseEffect - cleanUp

- React의 `useEffect()`는 처음 실행될때 실행하거나 혹은 감시자 옵션을 둬서 감시하는 대상의 값이 변경 될 경우 실행 하게 할 수 있다.
- 하지만 해당 `useEffect()`를 사용하는 대상이 삭제 됐다가 다시 생길 경우 다시 해당 함수가 실행된다.
  - 당연한 원리이다 한번 실행 되는 기준이 컴포넌트가 생길 떄 이미 때문임.
- 그렇다면 삭제되는 시점에도 특정 함수를 실행 시키고 싶다면 ? - 예를 들어 모달이 닫힐 경우 임시저장을하는 함수 실행
  - `cleanUp` 방식을 사용하면 된다.
    - 별거 없이 반환 하는 부분에 함수를 사용해주면 된다.

### 사용 방법

```javascript
import { useState, useEffect } from "react";

// 👉 보이고 안보이고 대상이 될 컴포넌트
function Hello() {
  useEffect(() => {
    console.log("useEffect이지만 지웠다 다시 만들어서 show시 로그가 찍힘");
    // 해당 컴포넌트가 제거 될 경우 아래의 함수가 실행된다.
    return () => console.log("해당 컴포넌트가 없어질 떄 실행된다.");
  }, []);

  return (
    <div>
      <h1>Hi~~</h1>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  return (
    <div>
      {/** Javascipt를 사용하라면 "{}"안에 사용해야한다! */}
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "hide" : "show"}</button>
    </div>
  );
}
```

<hr/>

## useState - 배열 다루는 방법

- 중요한 점은 React에서 상태값 (변수의 값)을 변경하려면 해당 `useState()`에서 만들었던 수정 함수를 사용해야한다.
  - 그냥 일반 javasript처럼 값을 변경하면 값은 바뀌지면 랜더링이 되지 않아 화면은 그대로임..
- `const [val, setVal] = useSate();`에서 `setVal()`를 사용할 경우 State는 항상 새로운 값으로 넣어줘야한다!. 값을 변경하는 개념이 아님 새로운 값을 넣어주는 개념이여야함!! ⭐️중요

### 사용 예시

```javascript
import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  // Todo 목록
  const [todos, setTodos] = useState([]);
  console.log("Todo 목록 ::: ", todo);
  const onChage = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    // ❌  `todos.push(todo)` 리엑트는 이런식으로 사용하지 않음!! 재랜더링이 안됨
    // 💬 중요! 바뀌는 State는 항상 새로운 값이어야함!! 그렇기에 새로운 값 + 이전 Array를 넣어주자
    setTodos((currentArray) => [todo, ...currentArray]); // ⭐️ 새롭게 상태를 할당함
    setTodo(""); // 초기화
  };
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChage}
          type="text"
          placeholder="Write Your todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
```

<hr/>

## useState - 배열 다루는 방법 ( Map을 활용 UI 그리기 )

- React가 아닌 일반 javascipt를 통해 해당 목적을 이뤄내기 위해서는
  - `ul`을 생성하고 Id를 지정한다.
  - `ul`을 채워 넣을 배열 데이터를 `map()`을 통해 li로 변환 후 forEach를 통해 `ul`에 `append()`시킨다.
  - 위와 같은 순서가 필요하지만 React를 사용하하면 좀더 간한하게 처리가 가능하다.
- 주의 사항
  - `li`를 생성할때 각각의 `li`에 유니크 키를 설정해 줘야한다.
    - 각각을 독립된 컴포넌트로 바라보기 때문에 구분하기 위함.
  - `<li>${itme}</li>`처럼 사용하면 안된다 에러는 없지만 `li`와`$`자체를 문자열로 인식해버림

### 사용 예시

```javascript
// 위와 같은 코드 스킵
return (
  <div>
    // 위와 같은 코드 스킵
    <ul>
      {/*** 💬 간단하게 처리가 가능함 내부 문자 "{}"안에 코드만 javascript로 인식 나머지는 jsx태그로 인식함!!
       *       `${}`를 사용할 필요가 없음 용하면 오히려 <li>테그를 문자로 인식하는 문제가 발생함    */}
      {todos.map((item, idx) => (
        // 👉 key를 설정해 주지 않으면 unique key 에러가 발생한다! - 하나하나의 같은 컴포넌트로 인식하기 때문에 구분하기 위해 필요함
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
```

<hr/>

## useEffect - 비동기 통신으로 데이터 받기

- `useEffect`를 사용했지만 원하는 방식에 맞게 `useState`에 사용해도 사용 방법에는 큰차이는 없다.
  - 랜더링의 차이만 있을 뿐이다.
- 주의사항
  - `useEffect`랑은 상관은 없지만 `useSate`를 사용할 때 초기값 설정을 해주는 습관을 꼭 갖자
    - 값이 없을 경우 undefinde가 할당 되어 length와 같은 명령어가 실행되면 에러가 발생함.

### 사용 예시

```javascript
import { useState, useEffect } from "react";

function CoinApp() {
  const [looad, setLoading] = useState(true);
  // ✅ 초기값을 설정해주지 않으면 `<h2>The Coing ({coins.length}) </h2>`에러 발생 초기값 설정해주는 습관을 갖자!
  //     - 이유 : 초기값 설정을 해주지 않으면 undefined 상태 이기 때문이다.
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => setCoins(result)) // 응답값을 coin에 할당해 줌
      .catch((e) => console.log(e))
      .finally(() => setLoading(false)); // 로딩 상태를 변경
  }, []);
  return (
    <div>
      <h2>The Coing {looad ? "" : `(${coins.length}개)`} </h2>
      {/* 👉 로딩 유무에 따라 */}
      {looad ? (
        // True
        <strong>Loading...</strong>
      ) : (
        //False
        <select>
          {coins.map((item, idx) => (
            <option key={idx}>
              {item.id} ({item.symbol}) : ${item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

// Export 시켜줌
export default CoinApp;
```

<hr/>

## React-Router 사용 방법

- `localhost:3000/movie/111` 와 같이 주소를 넣어 페이지가 전활 될 수 있게 끔 하는 것이다.
- 따로 설치 및 설정을 해주지 않으면 url을 변경한다 해도 계속 같은 페이지만 나옴..
- 설치방법
- 프로젝트 디렉토리 이동
- `npm install react-router-dom`으로 React-Router-Dom을 설치한다.
- ```javascript
  import {
    BrowserRouter as Router,
    //HashRouter as Router,  주소에 #이 붙는다
    Routes,
    Route,
    Switch,
  } from "react-router-dom";
  import Home from "./routes/Home";
  import Detail from "./routes/Detail";
  // 💬 해당 path에 매칭되는 컴포넌트로 이동시켜 준다.
  function App() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/moive">
              <Detail />
            </Route>
            {/* exact사용 이유는 home경로를 정확하게 이해시키기 위함 */}
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  export default App;
  ```

<hr/>

## React-Router - Link 사용 방법

- 일반적인 `<a herf=""></a>` 태그를 사용해서 이동 시 화면이 깜박 거리는 문제가 있다..
- `Link`를 import 하여 사용하면 해결이 가능함.

```javascript
// 💬  Link를 추가해준다.
import { Link } from "react-router-dom";
function Movie({ title }) {
  return (
    <div>
      {/**해당 방법은 화면이 깜박거리는 문제가 있음 */}
      {/* <h2><a href="/moive">{title}</a></h2>  */}
      <h2>
        {/** 💬 Link를 사용하면 화면이 깜박이지 않고 이동 가능함 */}
        <Link to="/movie">{title}</Link>
      </h2>
    </div>
  );
}

export default Movie;
```

<hr/>

## React-Router - PathVariable 전달 방법

- `domain/path/???`와 같은 url에 들어가 있는 값을 읽는 방법
  - `import { useParams } from "react-router-dom";`를 사용해주면 된다.

### 사용 예시 - 순서별

- 1 . React-Router를 사용하는 부분에서 `:key`를 사용해서 값을 넘겨줄 값의 key를 지정해준다.

  - ```javascript
    // App.js
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
    import Detail from "./routes/Detail";

    function App() {
      return (
        <div>
          <Router>
            <Switch>
              {/* Router에서 :id값을 알고싶다고 표시해주는 것임!! */}
              <Route path="/movie/:id">
                <Detail />
              </Route>
            </Switch>
          </Router>
        </div>
      );
    }
    ```

- 2 . 해당 url을 `Link` 해주는 부분에 값을 전달

  - Movie에서 Detail로 이동하는 Link를 생성해 줌
  - ```javascript
    // Home.js
    import { useState, useEffect } from "react";
    import Movie from "../components/MovieComponent";

    function Home() {
      const [movieData, setMovieData] = useState([]);

      const getMovies = async () => {
        // 비동기로 데이터를 받아옴..
      };

      useEffect(() => {
        getMovies();
      }, []);

      return (
        <div>
          {movieData.map((item) => (
            <Movie
              {/** 👉 Key값을 추가해줌 */}
              key={item.id}
              id={item.id}
              movieImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      );
    }

    export default Home;
    ```

- 3 . 해당 url을 `Link` 해주는 부분에 값을 전달해주는 부분

  - `:key` ":"가 없으면 그냥 해당 부분까지 url로 인식하니 주의하자!
  - ```javascript
    // MovieComponent
    import { Link } from "react-router-dom";
    function Movie({ id, movieImg, title, summary, genres }) {
      return (
        <div>
          <h2>
            {/**  👉 받아온 id값을 Link값에 넣어서 전달 */}
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        </div>
      );
    }
    export default Movie;
    ```

- 4 . `useParams`을 통해 받아온 값을 사용

  - ```javascript
    import { useEffect } from "react";
    // 💬 Router에서 :key 값으로 넘긴 값을 받아올 수 있음 - Object형태
    import { useParams } from "react-router-dom";
    function Detail() {
      // 👉 Router에서 넘긴 key값 >>> 한개가 아닌 여러개도 가능하다 { id, black, gom ...}등등
      const { id } = useParams();
      // 초기 세팅
      useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((e) => console.log(e));
      }, []);

      return <h1>Detail</h1>;
    }
    export default Detail;
    ```

<hr/>

## React-Hook

### `useState()`?

- 값이 변경되면 해당 컴포넌트를 재랜더링 해줌
- 초기값 설정은 중요함 잊지말자
- "대상 변경 함수"는 새로운 값으로 변경 되게 끔 해주자!
  - ex) ❌ 작동 안함 `setValue(value++)` || 👍 `setValue( value + 1)`
- 코드
  - ```javascript
    import {useState} from "react";
    const [ 대상 , 대상 변경 함수 ] = useState(초기값 설정);
    ```

#### 1️⃣ useState() - 컴포넌트 함수 외부에 있는 경우?

- 여태까지는 `useState()`자체가 항상 사용하려는 해당 컴포넌트 function안에서만 사용했지만 밖에 있거나 `외부의 useState()`를 사용할 수 있다.
- 코드

  - ```javascript
    import { useState } from "react";

    // 💬 외부에 선언 되어 있는 함수안에 useStat가 있음
    const useInput = (initialValue) => {
      const [value, setValue] = useState(initialValue);
      return { value, setValue };
    };

    function App() {
      // 💬 컴포넌트 내부 함수에서 외부 함수를 선언해서 반환 Object를 받음
      const name = useInput("yoo");
      return (
        <div className="App">
          <input
            type="text"
            placeholder="name"
            // 👉 Object 형식으로 반환 하기 떄문에 아래와 같이 사용
            value={name.value}
            onChange={(e) => name.setValue(e.target.value)}
          />
        </div>
      );
    }
    export default App;
    ```

#### 2️⃣ useState() - 모듈화

- 해당 예제들의 중요 포인트는 "**컴포넌트 내부 또는 해당 .js**"에 `useState()`를 사용하지 않아도 불러와 사용해도  
  ⭐ 중요 : state를 `공유 및 랜더링` 해준다는 것이다!
- 예제 1 - input을 활용한 `useState` 모듈화

  - `UseInput.js`

    - ```javascript
      import { useState } from "react";
      // 👉 export시켜 줌
      export const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) => {
          const {
            target: { value },
          } = event;

          let willUpdate = false;

          // 👉 받아온 파라미터가 함수일 경우에만 실행
          if (typeof validator === "function") {
            willUpdate = validator(value);
          }

          if (willUpdate) {
            setValue(value);
          } // if - 정상일 경우에만 useSate() Update!
        };
        return { value, onChange };
      };
      ```

  - `App.js`
    ```javascript
    import { useInput } from "./useInput/UseInput";
    function App() {
      // 👉 10이 넘으면 작동하지 않게 끔 조건 함수를 변수로 만듬
      const maxLen = (val) => val.length <= 10;
      // const includeWordChck = (val) => !val.includes("@");
      const name = useInput("yoo", maxLen);
      return (
        <div className="App">
          <input
            type="text"
            placeholder="name"
            /**  💬 useInput()함수 자체에서 반환 할 때 이름을 맞춰줬기 떄문에 아래와같이 사용이 가능함 */
            {...name}
          />
        </div>
      );
    }
    export default App;
    ```

- 예제 2 - button을 활용한 `useState` 모듈화

  - UseTab.js

    - ```javascript
      import { useState } from "react";

      /**
       * 선택된 인덱스 번호 맞느 전달받은 JSON의 배열의 Index를 반환
       *
       * @param initialTabIndex : index 번호
       * @param sectionList : 기반이 될 JSON Data
       *
       * @return {
       *  currentItem , // 입력받은 index의 데이터
       *  changeItem    //  useState()의 값 변경 함수
       * }
       */
      export const useTabs = (initialTabIndex, sectionList) => {
        const [currentIndx, setCurrentIndex] = useState(initialTabIndex);
        // 👉 Validation Check
        if (!sectionList || !Array.isArray(sectionList)) return;
        return {
          currentItem: sectionList[currentIndx],
          changeItem: setCurrentIndex,
        };
      };
      ```

  - App.js

    - ```javascript
      import { useTabs } from "./useStateModule/UseTab";

      const section = [
        {
          tab: "Section1",
          content: "I'm the content of the Section 1",
        },
        {
          tab: "Section2",
          content: "I'm the content of the Section 2",
        },
      ];

      function App() {
        // 👉 import한 함수를 사용
        const { currentItem, changeItem } = useTabs(0, section);
        return (
          <div className="App">
            {section.map((item, idx) => (
              <button
                key={idx}
                // 👉 onClick 사용 시 앵간하면 겉에 Click 함수를 감싸주자 loop error!!!
                onClick={() => {
                  changeItem(idx);
                }}
              >
                {item.tab}
              </button>
            ))}
            {/** 👉 반환 받은 currentItem 데이터의  content값을 보여줌 */}
            <div>{currentItem.content}</div>
          </div>
        );
      }

      export default App;
      ```

#### useEffect() - 모듈화

- title 변경

  - UseTitle.js

    - ```javascript
      import { useState, useEffect } from "react";

      /**
       * 받아온 데이터를 기반으로 useEffect()를 사용하여 값 변경
       * - 감시 대상으로 title 를 지정
       * - 랜더링 시 한번 실행된 후 감시 대상의 값이 변경 되어야 재 실행 및 랜더링
       *
       * @param initialTitle  - 타이틀에 사용될 문구
       *
       * @return setTitle - useState()의 값 변경 함수
       */
      export const useTitle = (initialTitle) => {
        const [title, setTitle] = useState(initialTitle);
        const updateTitle = () => {
          // 👉  해당 title은 정말 HTML에서의 최 상단 title 이다!!
          const htmlTitle = document.querySelector("title");
          htmlTitle.innerText = title;
        };
        // 👉 useEffect() 사용
        useEffect(updateTitle, [title]);

        // 💬 값을 바꾸는 setTitle를 반환함
        return setTitle;
      };
      ```

  - App.js

    - ```javascript
      import { useTitle } from "./useEffectModule/UseTitle";

      function App() {
        // 👉 모듈화한 함수 실행
        const titleUpdate = useTitle("Loading....");
        // 👉 5초 후 title 값을 변경해서 useEffect()가 재 랜더링 되게 끔 설정
        setTimeout(() => {
          titleUpdate("useEffect사용! title 변경 시 감지 랜더링");
        }, 5_000);
        return <div className="App"></div>;
      }

      export default App;
      ```

<br/>
<hr/>

### `useEffect()`?

- `useEffect()`는 3가지 기능을 갖고 있고 쓰임에 따라 그 기능이 다르다.

  - ComponentDidMount : 한번만 실행 되며, 초기 데이터 로딩, 외부 데이터 가져오기, 구독 설정 및 초기화와 같은 작업을 수행합니다.
    - ```javascript
      useEffect(() => {
        // 컴포넌트가 마운트될 때 실행되는 코드
        // 예: 초기 데이터 로딩, 외부 API 호출 등
      }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행
      ```
  - ComponentDidUpdate : 특정 상태값이나 프롭스가 변경될 때 코드를 실행할 수 있습니다.

    - ```javascript
      useEffect(() => {
        // 특정 상태나 프롭스가 변경될 때 실행되는 코드
        // 예: 데이터 업데이트, 상태에 따른 조건부 처리 등
      }, [dependency]); // dependency에 의존하는 값이 변경될 때 실행
      ```

  - ComponentWilUnMount : 반환된 함수를 통해 컴포넌트가 언마운트(사라질 때)될 때 정리 작업을 수행할 수 있습니다.

    - ```javascript
      useEffect(() => {
        // 컴포넌트가 마운트될 때 실행되는 코드

        return () => {
          // 컴포넌트가 언마운트될 때 실행되는 코드
          // 예: 구독 해제, 타이머 클리어 등
        };
      }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행
      ```

<br/>
<hr/>

### `useRef()`?

- javscript의 `document.getElementById`와 굉장히 유사한 기능을 한다.
- React에서는 Id를 사용하지 않고 `ref={}`를 지정해서 사용하는데 해당 ref를 찾을 수 있다.
- 사용 방법

  - ```javascript
    // App.js
    import { useRef } from "react";

    function App() {
      const blackGom = useRef();

      // 👉 input을 포커싱함! document.getElementById 와 비슷함
      setTimeout(() => {
        // 👉 blackGom.current  input이 잡힘
        blackGom.current.focus();
      }, 2000);

      return (
        <div className="App">
          {/* React에서 만들어지는 요소들은 무조건 ref[Reference]를 갖고있다 */}
          <input ref={blackGom} placeholder="name" />
        </div>
      );
    }
    export default App;
    ```

<br/>
<hr/>

### `useRef()` 사용 시 꼭 알아야하는 이론

- `useEffect()`를 사용해서 ref()요소에 Event를 주고 만약 `useEffect()`가 `componentWillUnMount`가 될 경우 될 경우 Event를 삭제해 줘야한다는 것이다.

  - 불필요한 자원을 관리하기 위해서 이다.

- 예시 코드

  - UseClick.js

    ```javascript
    import { useEffect, useRef } from "react";

    export const useClick = (onClick) => {
      const element = useRef();
      /**
       * 실행 순서 -  숫자 증가 예시의 경우 순서
       * - 0. 숫자 증가 버튼 클릭 시
       * - 1. 일단 useEffect()의 실행 함수가 실행
       * - 2. 이벤트 발생 시 clean-up 함수 실행
       * - 3. 실행 함수 실행
       */
      useEffect(() => {
        // 👉 ComponentDidMount, ComponentDidUpdate 시 사용됨
        if (element.current) {
          element.current.addEventListener("click", onClick);
        } // if

        /////////////////////////////////////////////////////////////////

        // 👉 ComponentWilUnMount 될 경우 사용 된다.
        /***
         * 사용 이유
         * - component가 mount되지 않았을 때 eventListenter가 배치되게 하고 싶지 않기 떄문임
         * - clean-up 함수라고도 한다!
         * - clean-up func는 대상 state가 사라질 때 (unmount)될 때 실행이 되는 것을 알 수 있습니다.
         */
        return () => {
          if (element.current) {
            element.current.removeEventListener("click", onClick);
          } //if
        }; // return
      }, []);

      return element;
    };
    ```

  - App.js

    ```javascript
    import { useClick } from "./useEffectModule/UseClick";
    function App() {
      // 👉 useClick에 전달함 함수
      const sayHello = () => console.log("say Hello~");
      const title = useClick(sayHello);
      return (
        <div className="App">
          {/**  👉 ref 지정 */}
          <h1 ref={title}>Hello</h1>
        </div>
      );
    }

    export default App;
    ```

<br/>
<hr/>

### `functional Hook` 활용

- `Confirm`활용

  - 예시

    - UseConfirm.js

      ```javascript
      /**
       * confirm Hook
       *
       * @param message confirm 알림 메세지
       * @param onConfirm 확인 시 사용될 메서드
       * @param onCancel 취소 시 사용될 메서드
       *
       * @return confirm에 사용될 함수 반환
       */
      export const useConfirm = (message = "", onConfirm, onCancel) => {
        /** 💬 Validation Chcek */
        if (!onConfirm || typeof onConfirm !== "function") return;
        if (!onCancel || typeof onCancel !== "function") return;

        return () => {
          window.confirm(message) ? onConfirm() : onCancel();
        };
      };
      ```

- `onbeforeunload` 활용

  - 페이지 새로고침 혹은 나가기 누를 경우 알림 메세지 발생
  - 예시

    - UsePreventLeave.js

      ```javascript
      /**
      * 💬 beforeunload 활용 방법
      *
      * window.onbeforeunload = function() {
      * fetch('/logger', {
      *       method: 'POST',
      *       body: new URLSearchParams({agent: 'agent-info', logdata: 'data'}),
      *       keepalive: true
      * });
      * };
      *
      * beforeunload 이벤트 핸들러에서 특정 작업을 실행할 경우
      * 해당 작업이 윈도우가 닫힌 뒤에도 실행될 수 있도록 해야 할 필요가 있습니다.
      * 이런 경우를 위해 sendBeacon()과 같은 메서드를 이용해 윈도우가 닫힌 후에도
      * 실행 완료를 보장할 수 있도록 하거나, 비동기 Fetch API에 "keepalive"와 같은 속성을
      * 사용해서 비동기 호출이 완료될 수 있도록 할 수 있습니다.
      *
      * - Fetch API에 keepalive 속성을 추가
      * - 단, 전송할 수 있는 최대 데이터는 64Kb 이하로 제한됩니다.
          \*/

      export const usePreventLeave = () => {
        const listener = (e) => {
          e.preventDefault();
          // ✅ 필수!! 없으면 메세지가 안 뜸 어떠한 값을 넣어도 상관은 없음 무시되기 때문임 단 존재는 해야한다.
          e.returnValue = "";
        };
        // 👉 화면이 닫힐 경우 경고 메세지
        const enablePrevent = () => (window.onbeforeunload = listener);
        // 👉 경고 메세지 제거
        const disablePrevent = () => (window.onbeforeunload = null);
        return { enablePrevent, disablePrevent };
      };
      ```

    - App.js

      ```javascript
      import { usePreventLeave } from "./functionalModule/usePreventLeave";

      function App() {
        const { enablePrevent, disablePrevent } = usePreventLeave();
        return (
          <div className="App">
            <button onClick={enablePrevent}>종료 시 알림창</button>
            <button onClick={disablePrevent}>종료 시 알림창 제거</button>
          </div>
        );
      }
      export default App;
      ```

- `functional`과 `useEffect`를 조합하여 사용

  - UseBeforeLeave.js

    ```javascript
    import { useEffect } from "react";

    export const useBeforeLeave = (onBefore) => {
      useEffect(() => {
        document.addEventListener("mouseleave", heandle);
        // 💬 ComponentWilUnMount 시 삭제 - 중요!!!
        return () => {
          document.removeEventListener("mouseleave", heandle);
        };
      }, []);

      // 💬 addEventListener에서 받아온 (e) : event임!
      const heandle = (e) => {
        console.log(e);
        onBefore();
      };
    };
    ```

  - App.js

    ```javascript
    import { useBeforeLeave } from "./functionalModule/UseBeforeLeave";

    function App() {
      // 👉 사용될 Function 생성
      const beforeEvent = () => console.log("leaving...");
      // ✅ 파라미터로 전달
      useBeforeLeave(beforeEvent);
      return <div className="App"></div>;
    }

    export default App;
    ```

- `functional`과 `useEffect`, `ref()`를 조합하여 사용

  - UseFadeIn.js

    ```javascript
    import { useEffect, useRef } from "react";

    export const useFadeIn = (duration = 1) => {
      // 💬 React의 Ref를 가져옴
      const element = useRef();
      useEffect(() => {
        if (element.current) {
          // 👉 사용에 편의를 위해 Object를 단축해서 변수로 만듬
          const { current } = element;
          current.style.transition = `opacity ${duration}s`;
          current.style.opacity = 1;
        }
      }, []);
      // 💬 Object형태로 key값을 맞춰서 반환하여 사용 하는 쪽에서 {...반환}을 사용하여 쉽게 사용
      return { ref: element, style: { opacity: 0 } };
    };
    ```

  - App.js

    ```javascript
    import { useFadeIn } from "./functionalModule/UseFadeIn";

    function App() {
      /**
       * ⭐ 여기서 중요한건 ref()는 하나만 참조가 가능하기에
       *    각각 하나씩 반환 함수를 만들어서 적용해 줬다는 것이다.
       */
      const fadeInH1 = useFadeIn(3);
      const fadeInP = useFadeIn(5);
      return (
        <div className="App">
          <h1 {...fadeInH1}>Hello~</h1>
          <p {...fadeInP}>이런식으로 만들어서 사용이 가능하다</p>
        </div>
      );
    }

    export default App;
    ```

- `functional`과 `useEffect` - 네트워크 상태 확인

  - UseNetwork.js

    ```javascript
    import { useState, useEffect } from "react";

    /**
     * 온라인 오프라인 상태를 확인하는 Hook
     *
     * @param onChange 상태가 변경될 때 실행 될 함수
     *
     * @return 현재 네트워크 연결 상태 - useState() 사용
     */
    export const useNetwork = (onChange) => {
      // 👉 "navigator.onLine" javascript내장 Object이며 boolean을 반환함
      const [status, setStatus] = useState(navigator.onLine);

      // 👉 window 이벤트 시 실행 될 함수
      const handleChange = () => {
        // 💬 파라미터로 받은 함수
        onChange(navigator.onLine);
        // 💬 React useState() 변경
        setStatus(navigator.onLine);
      };

      useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
          window.removeEventListener("online", handleChange);
          window.removeEventListener("offline", handleChange);
        };
      }, []);
      return status;
    };
    ```

  - App.js

    ```javascript
    import { useNetwork } from "./functionalModule/UseNetwork";

    function App() {
      const handleNetrowkChange = (status) =>
        console.log(status ? "온라인 상태!!!" : "오프라인 상태!!");

      const onLine = useNetwork(handleNetrowkChange);
      return (
        <div className="App">
          <h2>{onLine ? "온라인 상태입니다." : "오프라인 상태입니다."}</h2>
        </div>
      );
    }

    export default App;
    ```

- `functional`과 `useEffect`, `useEffect` - 스크롤 값 이벤트

  - UseScroll.js

    ```javascript
    import { useState, useEffect } from "react";
    export const useScroll = () => {
      // 👉 useState() 생성
      const [state, setState] = useState({ x: 0, y: 0 });

      // 👉 scroll 이벤트 시 실행 될 함수 - useSate()값 변경
      const onsScroll = () =>
        setState({ x: window.scrollX, y: window.scrollY });

      useEffect(() => {
        window.addEventListener("scroll", onsScroll);
        return () => window.removeEventListener("scroll", onsScroll);
      }, []);

      return state;
    };
    ```

  - App.js

    ```javascript
    import { useScroll } from "./functionalModule/UseScroll";

    function App() {
      const { y } = useScroll();
      return (
        <div className="App" style={{ height: "1000vh" }}>
          <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
            스크롤 높이에 따라 색 변경
          </h1>
        </div>
      );
    }

    export default App;
    ```

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<hr/>

## React 연습간 삽질 목록 ....

- 부모 컴포넌트 내부 -> 자식 컴포넌트가 이벤트를 통해 부모컴포넌트의 UI를 변경하려는 상황

  - `useSate()`를 사용해서 값을 변경
  - 문제
    - 배열의 정보를 porp으로 전달해서 목록을 그려주는 자식 컴포넌트에서 어떻게하면 `key`값을 넘기지..? 라는 고민을함.
    - data-set을 사용할까 했지만 그건 `Reat`스럽지 못한 개발 방식이라 생각함. 데이터가 보이게 하고싶지 않았음
    - 간단하게 이벤트 자체에 파라미터로 idx를 전달하면 되겠지 하고 했지만 에러 발생...
      - ex) `<li onClick={liClick(idx)} key={idx}>`
      - error : `while rendering a different component (`Nav`). To locate the bad setState() call inside `Nav`, follow the stack trace as described in`
  - 해결

    - 이벤트를 바로 함수를 Call하는 것이 아닌 한번 더 감싸주면 쉽게 해결. -`event`자체도 파라미터로 받을 수 있게 되었음

      - ```javascript
        export const Nav = ({ list, modeChange }) => {
          const liClick = (index, e) => {
            console.log("클릭 이벤트도 받을 수 있음!!", e);
            let mod = "WELCOME";
            if (index === 0) {
              mod = "WELCOME";
            } else if (index === 1) {
              mod = "BACK";
            }
            // 👉 useSate()에서 수정 함수임
            modeChange(mod);
          };

          return (
            <div>
              <ul>
                {list.map((itme, idx) => (
                  // 이렇게 ()=>{만든 이벤트}를 넣어줘야 에러도 없고 해당 타겟 찾기도 쉬움!!
                  <li onClick={(e) => liClick(idx, e)} key={idx}>
                    {itme}
                  </li>
                ))}
              </ul>
            </div>
          );
        };
        ```

- form의 데이터 -> 전송 버튼 -> 목록 업데이트

  - `form`, `input` 사용
  - 문제
    - 문제는 아니지만 `React`스럽게 사용하지 못함
      - input의 값에 `value={}`설정과 `onChange()`를 설정하지 않고 사용
      - 해당 방법을 통해 validation 체크 등 사용해 줄 수 있음!
  - 기존 코드 👎
    - ```javascript
      export const Create = ({ setListItem }) => {
        const formEvent = (event) => {
          event.preventDefault();
          // ❌ event.target.title.value 그냥 form의 데이터를 읽어서 사용해 버림
          setListItem((current) => [...current, event.target.title.value]);
        };
        return (
          <div>
            <h2>Creacte</h2>
            <form
              onSubmit={(e) => {
                formEvent(e);
              }}
            >
              <p>
                <input type="text" name="title" placeholder="title"></input>
              </p>
              <p>
                <textarea name="body" placeholder="body"></textarea>
              </p>
              <button>Submit</button>
            </form>
          </div>
        );
      };
      ```
  - 해결

    - `React`에서 권장하는 Input을 다루는 방법 사용
      - `useSate()`를 통해 변수 생성
      - `value={변수}` 지정
      - `onChage={변경함수}` 저정 - 👉 중요!! 안해주면 Input값 안 바뀜
    - ```javascript
      import { useState } from "react";
      export const Create = ({ setListItem }) => {
        // ✅ "" 안해주면 경고 메세지가 나옴
        const [inputValue, setInputValue] = useState("");

        const inputChage = (event) => {
          const value = event.target.value;
          // 👉 TODO : 여기서 validation 체크가 가능함
          setInputValue(value);
        };

        return (
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={inputValue}
              onChange={(e) => inputChage(e)}
            ></input>
            <button>Submit</button>
          </div>
        );
      };
      ```

- `useRef()`사용 시 재활용 삽집..

  - 문제
    - ref를 반환하는 변수 하나로 재사용 하려했지만 내가 생각했던것 처럼 실행되지 않음
  - 해결

    - 제대로 사용하려면 변수를 하나 더 만들어서 사용해주자
    - ```javascript
      import { useState, useEffect, useRef } from "react";

      /**
       *  ⭐️ Hook의 이름은 use... 로 시작해주지 check로 했다 에러 발생 ..
       *     - error :  React Hook function. React component names must start with an uppercase letter.
       *                React Hook names must start with the word "use"
       */
      const useCheck = () => {
        const element = useRef();
        if (element.current) {
          console.log(element); // 하나로 다 사용할 경우 h3
        }
        return element;
      };

      function App() {
        // ⭐️ 하나로 하면 ref는 마지막 h3만 인식함!! 제대로 사용하라면 변수를 추가해주자!
        const refFun = useCheck();
        const refFunH3 = useCheck();
        return (
          <div className="App">
            <p ref={refFun}>I'm P tag</p>
            <h3 ref={refFunH3}>I'm H3 tag</h3>
          </div>
        );
      }

      export default App;
      ```
