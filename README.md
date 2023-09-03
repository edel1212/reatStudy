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
