const initialState={
    langCode:localStorage.getItem('lang')||'uz'
}


const langReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LANG':
            return {
                ...state,
                langCode: action.langCode
            };
        default:
            return state;
    }
};


export default langReducer