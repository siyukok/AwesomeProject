import * as types from '../constants/ActionTypes'

const initialState = {
    isRefreshing: false
}

export default function demoReducer(state = initialState, action) {
    switch (action.type) {
        case types.ActionDemo:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing
            })
        default :
            return state;
    }
}