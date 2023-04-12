class Star {
  //1. DOM에 자동으로 추가되기
  //2. 랜덤 크기로 만들어지기
  //3. 랜덤 에니메이션 시간
  //4. 위치 랜덤으로 옮기기
  constructor() {
    this.node = document.createElement("div");
    this.node.classList.add("star");
    const randomNumber = Math.random() * 3 + 1;
    this.node.style.width = `${randomNumber}px`;
    this.node.style.height = `${randomNumber}px`;
    /* 2. 랜덤 크기로 만들어지기 CLAER */

    this.node.style.top = `${Math.floor(Math.random() * 100)}%`;
    this.node.style.left = `${Math.floor(Math.random() * 100)}%`;
    this.node.style.animationDuration = `${Math.random() * 3 + 1}s`;
    /* 4. 위치 랜덤으로 옮기기 CLEAR */
    document.body.appendChild(this.node); /*1. DOM에 자동 추가 CLAER */
  }
}

export default Star; /*default 공부하래 */
