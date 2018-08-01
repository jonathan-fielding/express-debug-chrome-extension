const sites = (state, action) => {
    if (typeof state === 'undefined') {
        return [[
            {
                url: 'http://localhost:3000/',
                key: 'rBiycQDurzDmaLaKGrPCxwYFfgmxnuadPhddidvg2XAvhCUiZHProzPqpVYwsZbD',
            }
        ]];
    }

    switch (action.type) {
        case 'ADD_SITE':
            return [
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    key: action.key,
                }
            ];
        case 'DELETE_SITE':
            return state.filter(site => site.id !== action.id)
        default:
            return state;
    }
}

export default sites;