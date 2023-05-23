const baseUrl = "http://ll11th-toy-project.p-e.kr:8000/";

getGuestbookList = () => {
  const response = axios
    .get(`${baseUrl}`)
    .then((response) => {
      console.log("방명록 리스트 조회 성공:", response.data);

      const data = response.data.result;

      data.map((datas, i) => {
        const list = document.createElement("div");
        list.id = "list";

        const text = document.createElement("span");
        text.innerText = `
        작성자: ${datas.writer}
        내용: ${datas.content}`;

        const guestbookForm = document.getElementById("guestbookForm");
        guestbookForm.appendChild(list);
        list.appendChild(text);
        i++;
      });
    })

    .catch((error) => {
      console.log("방명록 조회 오류:", error);
    });
};

const guestbookForm = document.getElementById("guestbookForm");

guestbookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const writerInput = document.getElementById("writer");
  const contentInput = document.getElementById("content");

  const guestbookData = {
    writer: writerInput.value,
    content: contentInput.value,
  };

  axios
    .post(`${baseUrl}`, guestbookData)
    .then((response) => {
      console.log("방명록 작성 성공:", response.data);
      writerInput.value = "";
      contentInput.value = "";
      getGuestbookList(); // 작성 후 방명록 리스트 다시 조회
    })
    .catch((error) => {
      console.log("방명록 작성 오류:", error);
    });
});

// 방명록 삭제
const deleteGuestbook = (guestbookId) => {
  axios
    .delete(`${baseUrl}/${guestbookId}`)
    .then((response) => {
      console.log("방명록 삭제 성공:", response.data);
      getGuestbookList(); // 삭제 후 방명록 리스트 다시 조회
    })
    .catch((error) => {
      console.error("방명록 삭제 오류:", error);
    });
};

// 방명록 리스트 조회
const renderGuestbook = (guestbookList) => {
  const guestbookContainer = document.getElementById("guestbookContainer");
  guestbookContainer.innerHTML = ""; // 기존 요소들 초기화

  guestbookList.forEach((guestbook) => {
    const guestbookItem = document.createElement("div");
    guestbookItem.classList.add("guestbook-item");

    const writer = document.createElement("p");
    writer.textContent = `작성자: ${guestbook.writer}`;

    const content = document.createElement("p");
    content.textContent = `내용: ${guestbook.content}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제하기";
    deleteButton.addEventListener("click", () => {
      deleteGuestbook(guestbook.id);
    });

    guestbookItem.appendChild(writer);
    guestbookItem.appendChild(content);
    guestbookItem.appendChild(deleteButton);

    guestbookContainer.appendChild(guestbookItem);
  });
};

// 초기 방명록 리스트 조회
// getGuestbookList();
