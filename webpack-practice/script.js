// API 호출 예시 (async/await 사용)

async function fetchAPI(endpoint) {
  const response = await fetch(`/api${endpoint}`);
  const data = await response.json();
  return data;
}

// 사용 예시
async function getData() {
  try {
    const result = await fetchAPI("/someEndpoint");
    // 데이터 처리
  } catch (error) {
    // 오류 처리
  }
}
