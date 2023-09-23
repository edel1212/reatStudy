export const Create = ({ setListItem }) => {
  const formEvent = (event) => {
    event.preventDefault();
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
