import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

export const getCodeBlocks = async () => {
  try {
    const res = await axios.get(`${apiUrl}/codeBlocks/getCodeBlocks`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
