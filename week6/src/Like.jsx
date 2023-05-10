import React, { Component } from "react";
import ggyu from "./규한팍.jpg";
import "./style.css";

class Like extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div className="container">
        <h3> 2023년 4월 몇일이었는지는 기억안남</h3>
        <img src={ggyu} className="img" alt="커피먹는 규하닝"></img>
        <p>규한이랑 45분동안 커피를 마셨다!</p>
        <button
          className="btn"
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          ❤️ {number}
        </button>
      </div>
    );
  }
}

export default Like;
