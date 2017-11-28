import * as types from '../constants/ActionTypes'

export function demoAction(isRefreshing) {
    return {
        type:types.ActionDemo,
        isRefreshing
    }
}