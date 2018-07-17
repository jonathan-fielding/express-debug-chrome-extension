const expressApplication = (state = [], action) => {
    if (typeof state === 'undefined') {
        return {
            siteSupported: true,
        };
    }

    switch (action.type) {
        case 'EXPRESS_POPULATE':
            return action.data;
        default:
            return state;
    }
}

export default expressApplication;