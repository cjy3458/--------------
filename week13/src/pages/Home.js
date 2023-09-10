import React, { useState } from "react";
import { Wrapper } from "../components/layout/common";
// import FormSection from "../components/home/FormSection";
import styled from "styled-components";

const Home = () => {
  const [previewImg, setPreviewImg] = useState("/img/previewDefalut.svg");
  const [uploadedImage, setUploadedImage] = useState(null);

  // async function convertExternalImageToBlob(url) {
  //   try {
  //     const response = await fetch(url); // 이미지 패키
  //     const blob = await response.blob(); // 이미지 blob으로 변환
  //     return blob;
  //   } catch (error) {
  //     console.error("Blob 전환 실패", error);
  //     return null;
  //   }
  // }
  const title = "ee";
  const content = "안녕하세요";

  const handleSubmit = (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm("게시글을 업로드 하시겠습니까?");
    if (userConfirmed) {
      const formData = new FormData();
      if (uploadedImage != null) {
        formData.append("image", uploadedImage);
      }
      formData.append("writer", 3); // 이건 지정을 해준건가... 물어보기
      formData.append("title", title);
      formData.append("content", content);

      // postNewTip(formData);
      alert("업로드 완료!");
    }
  };

  const insertImg = (e) => {
    let reader = new FileReader();
    // 업로드 파일 세팅 부분
    // const file = e.target.files[0];
    setUploadedImage(e.target.files[0]);
    console.log(e.target.files[0]);

    // 프리뷰 이미지 세팅 부분
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      // console.log(reader.readAsDataURL(e.target.files[0]));
    } else {
      setPreviewImg("/img/previewDefalut.svg"); // 파일 선택 취소 시 프리뷰 이미지 삭제
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      console.log(previewImgUrl);
      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };
  };

  return (
    <Wrapper>
      <ImgSection>
        <PreviewImg src={previewImg} />
        <ImgLabel htmlFor="imageInput">이미지 업로드</ImgLabel>
        <ImgInput
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={(e) => insertImg(e)}
        />
      </ImgSection>
      <SubmitBtn onClick={handleSubmit} type="submit">
        게시글 업로드
      </SubmitBtn>
      {/* <FormSection /> */}
    </Wrapper>
  );
};

export default Home;

const SubmitBtn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 400px;
  bottom: 0;
  margin-top: 2%;
  background-color: white;
  border-radius: 30px;
  border: 1px solid var(--light-gray, #dadada);
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  min-height: 30px;
  border-radius: 30px;
  border: solid 1px var(--light-gray, #dadada);
`;

const ImgLabel = styled.label`
  padding-bottom: 4%;
  font-weight: bold;
  font-size: 16px;
  color: black;
  display: inline-block;
  cursor: pointer;
`;

const ImgInput = styled.input`
  display: none;
`;

const PreviewImg = styled.img`
  object-fit: contain;
  max-width: 90%;
  height: auto;
  padding: 4% 1% 1% 1%;
`;
