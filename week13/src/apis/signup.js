import axios from "axios";

export const signUp = async (email, pw, name) => {
  const result = axios.post("http://front.cau-likelion.org/signup", {
    email,
    pw,
    name,
  });

  return result.data;
};
