const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
// const DATA = 'DATA';

function createRequestTypes(base) {
    const res = {};
    [REQUEST, SUCCESS, FAILURE].forEach((type) => { res[type] = `${base}_${type}`; });
    return res;
}

// function createStoreTypes(base) {
//     const data = {};
//     [DATA].forEach((type) => { data[type] = `${base}_${type}`; });
//     return data;
// }


export const USER_LOGIN = createRequestTypes('user_login');
export const UPDATE_INFO_USER = createRequestTypes('update_info_user');
