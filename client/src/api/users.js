import axios from "axios";

const apiUrl = "http://localhost:3001";

export const addNewUser = async (user) => {
  try {
    const res = await axios.post(`${apiUrl}/users/addUser`, user);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${apiUrl}/users/getUsers`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
