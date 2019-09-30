//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class IndecissionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("usuwam komponent");
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(newOpt) {
    if (!newOpt) {
      return "Enter the valid option";
    } else if (this.state.options.indexOf(newOpt) > -1) {
      return "This option is already added";
    }

    this.setState(prev => ({ options: [...prev.options, newOpt] }));
  }
  render() {
    const subtitle = "Let the machine decide your fate!";
    const { options } = this.state;

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action action={this.handlePick} hasOptions={!!options.length} />
        <Options
          options={options}
          removeAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption submit={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecission"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.action} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
const Options = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove all options</button>
      {props.options.length === 0 && (
        <p>No options to choose from, please add options</p>
      )}
      <ol>
        {props.options.map((option, index) => (
          <Option
            key={index}
            text={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = props => {
  return (
    <li>
      {props.text}
      <button onClick={e => props.handleDeleteOption(props.text)}>
        remove
      </button>
    </li>
  );
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const newOpt = e.target.elements.option.value.trim();

    const error = this.props.submit(newOpt);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        {this.state.error && <p>{this.state.error}</p>}

        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecissionApp />, document.getElementById("root"));
