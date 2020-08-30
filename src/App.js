import React from "react";
import Dropdown from "./Dropdown";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOpen: false,
      hover: false,
      tooltipDir: "TOP",
      content: "DOWNLOAD",
      arrow: "https://image.flaticon.com/icons/svg/566/566015.svg",
    };
  }

  displayDropdown = () => {
    let { listOpen, arrow } = this.state;
    listOpen = !listOpen;
    if (listOpen) {
      arrow = "https://image.flaticon.com/icons/svg/566/566014.svg";
    } else {
      arrow = "https://image.flaticon.com/icons/svg/566/566015.svg";
    }

    this.setState({ listOpen, arrow });
  };

  selectDirection = (direction) => {
    this.displayDropdown();
    this.setState({ tooltipDir: direction });
  };

  buttonHover = () => {
    let { hover } = this.state;

    hover = !hover;

    if (hover) {
      this.state.content = "Download now";
    } else {
      this.state.content = "Download";
    }

    this.setState({ hover });
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Dropdown
          listOpen={this.state.listOpen}
          arrow={this.state.arrow}
          tooltipDir={this.state.tooltipDir}
          displayDropdown={this.displayDropdown}
          selectDirection={this.selectDirection}
        />
        <Tooltip state={this.state} />
      </div>
    );
  }
}

export default App;
