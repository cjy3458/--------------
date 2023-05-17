const axios = require("axios");

async function callAPI() {
  try {
    const response = await axios.get(
      "http://ll11th-toy-project.p-e.kr:8000/api"
    );
    const data = response.data;
    console.log(data);
    // API 응답 데이터 처리
  } catch (error) {
    console.error(error);
    // 오류 처리
  }
}

callAPI();
