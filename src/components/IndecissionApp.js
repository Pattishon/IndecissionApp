import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecissionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

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

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption
    }));
  };

  handleAddOption = newOpt => {
    if (!newOpt) {
      return "Enter the valid option";
    } else if (this.state.options.indexOf(newOpt) > -1) {
      return "This option is already added";
    }

    this.setState(prev => ({ options: [...prev.options, newOpt] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  render() {
    const subtitle = "Let the machine decide your fate!";
    const { options } = this.state;

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action action={this.handlePick} hasOptions={!!options.length} />
          <div className="widget">
            <Options
              options={options}
              removeAll={this.handleRemoveAll}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption submit={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecissionApp;
