import React, { useEffect } from "react";
import { getMyPage } from "../apis/mypage";

const Mypage = () => {
  useEffect(() => {
    getMyPage().then((a) => {
      console.log(a);
    });
  }, []);
  return <div>Mypage</div>;
};

export default Mypage;
