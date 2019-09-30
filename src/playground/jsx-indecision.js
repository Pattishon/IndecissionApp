const app = {
  title: "Indecission app",
  subtitle: "Let the computer decide your fate",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

let chosenOption = "";

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  chosenOption = app.options[randomNumber];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length > 0 ? "Your options" : "No options available"}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
      <p>computer chose: {chosenOption}</p>
    </div>
  );
  ReactDOM.render(template, document.getElementById("root"));
};
render();

// ReactDOM.render(template, document.getElementById("root"));
