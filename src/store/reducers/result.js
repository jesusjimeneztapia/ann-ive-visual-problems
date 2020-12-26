import { type as getResult } from '../actions/getResult'
import results from '../../constants/results'

const defaultState = {
    title: '',
    description: '',
}
export const defaultType = 'default'

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case getResult:
            return results[payload]
        case defaultType:
            return defaultState
        default:
            return state
    }
}

export default reducer
