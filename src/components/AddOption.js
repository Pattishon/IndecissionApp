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
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
