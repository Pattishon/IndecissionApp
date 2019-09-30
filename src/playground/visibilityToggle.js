class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleClick}>
          {this.state.visible ? "Hide details" : "Show details"}
        </button>
        {this.state.visible && <p>Some details you can now see</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));
// let visible = false;

// const handleClick = () => {
//   visible = !visible;
//   render();
// };

// const render = () => {
//   const app = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={handleClick}>
//         {visible ? "Hide details" : "Show details"}
//       </button>
//       {visible && <p>Some details you can now see</p>}
//     </div>
//   );

//   ReactDOM.render(app, document.getElementById("root"));
// };
// render();
