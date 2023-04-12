import Button from "./button.js";
import Div from "./div.js";
import Input from "./input.js";

class Todo {
  constructor(todo) {
    this.line = new Div("", "flex").node;
    const input = new Input("");
    const innerText = new Div(todo, "inner");
    const button = new Button("X");

    button.node.addEventListener("click", () => {
      document.body.removeChild(this.line);
    });

    input.node.addEventListener("click", () => {
      innerText.node.classList.toggle("complete");
    });

    [input, innerText, button].forEach((dom) => {
      this.line.appendChild(dom.node); /*노드를 담아줘야된다고? 왜? */
    });

    document.body.appendChild(this.line);
  }
}

export default Todo;
