import { useState } from "react";
export const Create = ({ setListItem }) => {
  const [inputValue, setInputValue] = useState("");

  const formEvent = (event) => {
    event.preventDefault();
    setListItem((current) => [...current, inputValue]);
  };

  const inputChage = (event) => {
    const value = event.target.value;
    // 👉 TODO : 여기서 validation 체크가 가능함
    setInputValue(value);
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
          <input
            type="text"
            name="title"
            placeholder="title"
            value={inputValue}
            onChange={(e) => inputChage(e)}
          ></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};
