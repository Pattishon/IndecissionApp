import React from "react";

class AddOption extends React.Component {
  state = {
    error: ""
  };
  // constructor(props) {
  //   super(props);

  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }

  handleAddOption = e => {
    e.preventDefault();
    const newOpt = e.target.elements.option.value.trim();

    const error = this.props.submit(newOpt);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };

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
export default AddOption;
