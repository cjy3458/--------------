import axios from "./node_modules/axios/dist/esm/axios.min.js";

const baseUrl = "http://ll11th-toy-project.p-e.kr:8000";

// 방명록 작성
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
    })
    .catch((error) => {
      console.error("방명록 작성 오류:", error);
    });
});

// 방명록 리스트 조회
const renderGuestbook = (guestbookList) => {
  const guestbookContainer = document.getElementById("guestbookContainer");
  guestbookContainer.innerHTML = "";

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

const getGuestbookList = () => {
  axios
    .get(`${baseUrl}`)
    .then((response) => {
      console.log("방명록 리스트 조회 성공:", response.data);
      renderGuestbook(response.data);
    })
    .catch((error) => {
      console.error("방명록 리스트 조회 오류:", error);
    });
};

getGuestbookList();

// 방명록 삭제
const deleteGuestbook = (guestbookId) => {
  axios
    .delete(`${baseUrl}${guestbookId}`)
    .then((response) => {
      console.log("방명록 삭제 성공:", response.data);
      getGuestbookList(); // 삭제 후 방명록 리스트 다시 조회
    })
    .catch((error) => {
      console.error("방명록 삭제 오류:", error);
    });
};
