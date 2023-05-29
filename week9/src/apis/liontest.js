import axios from "axios";

export const baseUrl =
  "https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api";

export const getTest = () => {
  return axios.get(`${baseUrl}/liontest/question`);
};

export const getResult = (answer) => {
  return axios.post(`${baseUrl}/liontest/result`, {
    answer,
  });
};
