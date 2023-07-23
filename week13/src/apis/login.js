import axios from "axios";

export const login = async (email, pw) => {
  const result = await axios.post("http://front.cau-likelion.org/", {
    email: email,
    pw: pw,
  });

  return result.data.data;
};
