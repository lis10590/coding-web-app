import axios from "axios";

const apiUrl = "http://localhost:3001";

export const getCodeBlocks = async () => {
  try {
    const res = await axios.get(`${apiUrl}/codeBlocks/getCodeBlocks`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
