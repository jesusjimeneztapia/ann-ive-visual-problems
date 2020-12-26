import { defaultType } from '../reducers/result'

export const type = 'getResult'

const getResult = (index) => {
    return {
        type,
        payload: index,
    }
}
export const getDefaultResult = () => {
    return {
        type: defaultType,
        payload: -1,
    }
}

export default getResult
