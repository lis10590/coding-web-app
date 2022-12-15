import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getTestCases = async () => {
  try {
    const res = await axios.get(`${apiUrl}/testCases/getTestCases`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
