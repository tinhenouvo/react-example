import _ from "lodash";
import axios from 'axios';
import Config from '../config';
import LocalStoreHelper from '../helpers/local_store';

export default (endPoint, payload = {}, method = 'get', headers = {}, withoutDomain = false) => {

    let url = _.trimEnd(Config.domain, "/") + "/" + _.trimStart(endPoint, "/");
    if (withoutDomain) {
        url = endPoint;
    }
    const token = LocalStoreHelper.getAccessInfo('token');
    if (token) {
        headers = {...headers, 'Authorization': `${token}`};
    }
    let params = {};
    if (_.lowerCase(method) === 'get') {
        params = payload;
    }
    return axios({
        method: method,
        url: url,
        data: payload,
        params: params,
        headers: headers
    }).then((res) => {
        return res.data;
    });
};
