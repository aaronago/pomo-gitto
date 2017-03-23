import * as actions from '../actions/action';


const initalState = {
    issueSelected: false,
    issues: [],
    disabled: true,
    userSelected: '',
    pommoHistory: []
};


const listReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.SELECT_ISSUE:
            return{...state, disabled: false, userSelected: action.userInput}
        case actions.TOGGLE_ISSUE_SELECTED:
            return {...state, issueSelected: !state.issueSelected}
        case actions.DISABLE_ISSUE:
            return {...state, disabled: !state.disabled};
        case actions.FETCH_ISSUE_LIST_SUCCESS:
            return {...state, issues: action.lists}
        case actions.POMMO_HISTORY:
            return {...state, pommoHistory: [...state.pommoHistory, state.userSelected]}
        case actions.CLEAR_USER_SELECTED:
            return {...state, userSelected: ''}
        default:
            return state;
    }
}

export default listReducer;
