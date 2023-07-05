import ActionTypes from "./types";

const initialState = {
    userId: null,
    token: null,
    email: null
};


const userReducer =  (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ActionTypes.LOGOUT: {
            return {
                ...initialState,
            }
        }
        default: 
            return state;
    }
};

export default userReducer;

