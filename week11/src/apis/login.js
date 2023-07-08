import axios from "axios";

export const login = async () => {
  const result = axios.post("http://front.cau-likelion.org", { id, pw });

  return result.data.data;
};
