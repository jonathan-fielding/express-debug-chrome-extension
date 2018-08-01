const expressApplication = (state = [], action) => {
    if (typeof state === 'undefined') {
        return {
            supportedSite: false,
        };
    }

    switch (action.type) {
        case 'EXPRESS_POPULATE':
            return {
                ...action.data,
                supportedSite: true,
            };
        default:
            return state;
    }
}

export default expressApplication;