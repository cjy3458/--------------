import React, { useEffect, useState } from "react";
import { getMyPage } from "../apis/mypage";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    getMyPage().then((a) => {
      setData(a); // 데이터를 받아오는데 성공한다면
      setLoading(false); // Loading 상태를 False로 변경
      console.log(a);
    });
  }, []);

  if (loading) return <div>로딩중입니다...!</div>; // loading이 true라면 로딩창을 띄워주기!

  return (
    <div>
      <div>회원 성함: {data?.name}</div>
      <div>회원 나이: {data?.age}</div>
    </div>
  );
};

export default Mypage;
