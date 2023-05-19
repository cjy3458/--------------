// 방명록 작성
const guestbookForm = document.getElementById("guestbookForm");

guestbookForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const writer = document.getElementById("writer").value;
  const content = document.getElementById("content").value;

  try {
    const response = await fetch("http://ll11th-toy-project.p-e.kr:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ writer, content }),
    });
  } catch (error) {
    console.error("오류:", error);
  }
});
