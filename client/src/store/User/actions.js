import ActionTypes from "./types";

const setUser = (payload) => ({
    type: ActionTypes.SET_USER,
    payload,
});


const logout = () => ({
    type: ActionTypes.LOGOUT,
});

export {
    setUser,
    logout
};
