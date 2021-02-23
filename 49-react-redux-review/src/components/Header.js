import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Bailey",
    };
  }
  updateTitle = () => {
    this.state.title === "Bailey"
      ? this.setState({ title: "Zeus" })
      : this.setState({ title: "Bailey" });
  };

  render() {
    return (
      <header className="App-header">
        <div onClick={this.updateTitle}>{this.state.title}</div>
      </header>
    );
  }
}
export default Header;
