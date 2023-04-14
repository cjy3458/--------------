class DOM {
  /* tagName, innerText, className 매개변수를 받아 DOM 요소를 생성 */
  constructor(tagName, innerText, className) {
    // constructor 메서드 내부
    this.node = document.createElement(tagName); // 이 요소의 태그명은 tagName 매개변수
    this.node.innerText = innerText; // 생성된 요소의 텍스트 내용을 innerText 매개변수로 지정
    if (className) this.node.classList.add(className); // className 매개변수가 존재할 경우, 생성된 요소의 클래스 리스트에 className을 추가
  }
}

export default DOM;
