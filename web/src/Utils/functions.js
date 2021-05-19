import axios from "axios";

export const addUser = (user) => {
  return axios
    .post(`${process.env.REACT_APP_API}user`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
    .then((res) => {
      return res.data;
    });
};
