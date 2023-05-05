/*랜덤 값을 얻는 걸 이용해서 PAGE NO에 계속 다른 값 줘서 매 불러오기 마다 다른 정보들 불러오기  */
const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=bYQGsAKI%2Bo82D2RXIxbqqkFsNUYLBEPVhUC2EJPU%2BTyBCPeke9iZNM8K1R8v3ZEqeuGw1An9%2BlDqAQsyzA4sig%3D%3D`;

const container = document.getElementById("container");
let count = -1;

async function getData() {
  const random = Math.floor(Math.random() * 100 + 1);
  count++;
  const fetchData = await fetch(url);
  console.log(fetchData);

  const toJson = await fetchData.json();
  console.log(toJson);

  const myData = await toJson.response.body.items.item;
  console.log(myData);

  {
    myData.map((data, i) => {
      const link = document.createElement("div");
      link.id = "list";
      const image = document.createElement("img");

      image.src = data.galWebImageUrl;
      console.log(image.src);

      const text = document.createElement("span");
      text.innerText = `${i + 1 + 5 * count}번째 사진
      제목:${data.galTitle} 
      장소:${data.galPhotographyLocation}`;
      const button = document.createElement("button");
      button.innerText = "더 보기";
      button.addEventListener("click", () => {
        detailData(data);
      });

      container.appendChild(link);
      link.appendChild(image);
      link.appendChild(text);
      link.appendChild(button);
    });
  }
}

async function detailData(data) {
  const detailUrl = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?galCode=${data.galCode}&MobileOS=ETC&MobileApp=test&_type=json&serviceKey=bYQGsAKI%2Bo82D2RXIxbqqkFsNUYLBEPVhUC2EJPU%2BTyBCPeke9iZNM8K1R8v3ZEqeuGw1An9%2BlDqAQsyzA4sig%3D%3D`;

  const fetchData = await fetch(detailUrl);
  const toJson = await fetchData.json();

  // 상세 정보를 담을 페이지 생성
  const detailPage = document.createElement("div");
  detailPage.className = "detail-page";

  // 이미지 추가

  // 제목 추가
  const title = document.createElement("h2");
  title.innerText = data.galTitle;
  detailPage.appendChild(title);

  const photographer = document.createElement("p");
  photographer.innerText = `Photographer: ${item.galPhotographerName}`;
  detailPage.appendChild(photographer);

  const date = document.createElement("p");
  const parsedDate = new Date(item.galPhotographyDate);
  date.innerText = `Date: ${parsedDate.getFullYear()}/${
    parsedDate.getMonth() + 1
  }/${parsedDate.getDate()}`;
  detailPage.appendChild(date);

  // 상세 정보를 담은 페이지를 body에 추가
  document.body.appendChild(detailPage);
}
