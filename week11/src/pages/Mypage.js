import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";
import { Wrapper3, Title, Information, Inputs } from "../components/Common";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    getMyPage().then((a) => {
      setData(a); // 데이터를 받아오는데 성공한다면
      setLoading(false); // Loading 상태를 False로 변경
      console.log(data);
    });
  }, []);

  if (loading) return <div>로딩중입니다...!</div>; // loading이 true라면 로딩창을 띄워주기!

  return (
    <Wrapper3>
      <Title>회원 정보</Title>
      <Information>
        <div>회원님 성함: {data?.name}</div>
        <div>회원님 연세: {data?.age}세</div>
      </Information>
    </Wrapper3>
  );
};

export default Mypage;
