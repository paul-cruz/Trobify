export const setLoggedUserId = (id) => {
    localStorage.setItem("id",id);
};

export const getLoggedUserId = () => {
    return localStorage.getItem("id");
};

export const unsetLoggedUserId = () => {
    localStorage.deleteItem("id");  
};