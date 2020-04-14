import _ from 'lodash';
import { UPDATE_INFO_USER } from './types';


export const updateUserInfo = ({name, role}) => {
    return {
        type: UPDATE_INFO_USER,
        payload: {
            name, role
        }
    };
}