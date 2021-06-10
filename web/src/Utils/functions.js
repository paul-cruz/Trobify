import axios from 'axios';

export const registerUser = (user) => {
  console.log(user);
  return axios
    .post(`${process.env.REACT_APP_API}user/`, user, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const getProperty = (id) => {
  return axios
    .get(`${process.env.REACT_APP_API}property/${id}`, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      return res.data;
    });
};

export const getProperties = () => {
  return axios
    .get(`${process.env.REACT_APP_API}property/`, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      return res.data;
    });
};
