import Div from "./div.js";

class Todo {
  constructor(todo) {
    this.line = new Div("", "flex").node;
    const innerText = new Div(todo, "inner");

    [input, innerText].forEach((dom) => {
      this.line.appendChild(dom.node); /*노드를 담아줘야된다고? 왜? */
    });

    document.body.appendChild(this.line);
  }
}

export default Todo;
