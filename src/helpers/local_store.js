
const LocalStoreHelper = {
    getAccessInfo: (field) => {
        try {
            const accessInfo = JSON.parse(window.localStorage.getItem('accessInfo'));
            if (field) {
                return accessInfo[field];
            }
            return accessInfo;
        } catch (err) {
            return null;
        }
    },
    removeAccessInfo: (field) => {
        window.localStorage.removeItem('accessInfo');
    },
    setAccessInfo: (data) => {
        window.localStorage.setItem('accessInfo', JSON.stringify(data));
    }

};
export default LocalStoreHelper;
