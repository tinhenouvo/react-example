import request from '../services/http';

const endPoints = {
    loginAPI : '/api/login',
};


export const loginAPI = (data) => {
    return request(endPoints.loginAPI,data,'POST');
}
