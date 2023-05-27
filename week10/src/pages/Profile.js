import React from "react";
import { useParams } from "react-router-dom";

const data = {
  gyu: {
    name: "규한",
    description: "댄스머신",
  },
  gyupuppy: {
    name: "규한이네 개",
    description: "왕 커서 왕 귀여운",
  },
};

//데이터 객체 하나 설정해서 useParam 써서 /gyu면 그 안에 정보 /gyupuppy면 그 안에 정보

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
