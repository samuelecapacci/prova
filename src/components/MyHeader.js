import React, { Component } from "react";
import "./MyHeder.css";

class MyHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColorActive: this.props.myBoolean,
      apiresponse: null,
      loading: false
    };

    this.changeBgColor = this.changeBgColor.bind(this);
  }

  changeBgColor() {
    this.setState(prevState => ({
      bgColorActive: !prevState.bgColorActive
    }));
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (response.status === 200) {
      const res = await response.json();
      this.setState({ apiresponse: res, bgColorActive: true, loading: false });
    }
  }

  render() {
    const { bgColor, classHomeTitle, title } = this.props;
    const { loading, apiresponse } = this.state;
    return (
      <div>
        <header
          style={{
            backgroundColor: !this.state.bgColorActive ? bgColor : "green",
            color: "yellow",
            fontSize: "70px"
          }}
          className="App-header"
        >
          {loading ? (
            <p>loading...</p>
          ) : (
            apiresponse && <p>{apiresponse[0].title}</p>
          )}
          <h3 className={"mainTitle"}>{title}</h3>
          <button onClick={this.changeBgColor}>Change</button>
        </header>
      </div>
    );
  }
}

export default MyHeader;
