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

export const loginUser = (login) => {
  console.log(login);
  return axios
    .post(`${process.env.REACT_APP_API}user/login`, login, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
}

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

export const newProperty = (property) => {
  return axios
    .post(`${process.env.REACT_APP_API}property/`, property, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const newReport = (report) => {
  return axios
    .post(`${process.env.REACT_APP_API}report/`, report, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const getUser = (id) => {
  return axios
    .get(`${process.env.REACT_APP_API}user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      return res.data;
    });
};