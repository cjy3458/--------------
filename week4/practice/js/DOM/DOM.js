class DOM {
  /* tagName, innerText, className 매개변수를 받아 DOM 요소를 생성 */
  constructor(tagName, innerText, className) {
    this.node = document.createElement(tagName);
    this.node.innerText = innerText;
    if (className) this.node.classList.add(className);
  }
}

/*

DOM 클래스는 합니다.

constructor 메서드 내부에서 document.createElement(tagName) 코드를 통해 새로운 DOM 요소를 생성합니다. 이 요소의 태그명은 tagName 매개변수로부터 전달받습니다.

this.node.innerText = innerText 코드는 생성된 요소의 텍스트 내용을 innerText 매개변수로 지정합니다.

if (className) this.node.classList.add(className) 코드는 className 매개변수가 존재할 경우, 생성된 요소의 클래스 리스트에 className을 추가합니다.


*/

export default DOM;
