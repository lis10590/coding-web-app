import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

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

export const deleteUser = async (userSocketId) => {
  try {
    const res = await axios.delete(`${apiUrl}/users/deleteUser`, {
      data: { userSocketId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
