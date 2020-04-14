import { USER_LOGIN, UPDATE_INFO_USER } from '../actions/types';

const initialize = {
    username: null,
    loading: false,
    role: null
};


export default (state = initialize, action) => {
    switch (action.type) {
        case USER_LOGIN.REQUEST : {
            return { ...state, loading: true};
        }
        case UPDATE_INFO_USER: {
            const { name, role} = action.payload;
            return { ...state, username: name, role: role}
        }
        default:
            return state;

    }
}