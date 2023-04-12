class DOM {
  constructor(tagName, innerText, className) {
    this.node = document.createElement(tagName);
    this.node.innerText = innerText;
    if (className) this.node.classList.add(className);
  }
}

//div, button, input(checkbox),

export default DOM;
