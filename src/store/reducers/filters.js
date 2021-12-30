import { 
    FETCH_AVIA,
    FETCH_FOR_DECREMENT,
    FETCH_FOR_ENCREMENT,
    FETCH_FOR_TIME,
    FETCH_MAX_INPUT, 
    FETCH_MIN_INPUT, 
    FETCH_ONE_TRANSFER, 
    FETCH_ZERO_TRANSFER
} from "../actions/actionTypes"



const initialState = {
    min: '',
    max: '',
    zeroTransfer: null,
    oneTransfer: null,
    encrement: null,
    decrement: null,
    time: null,
    avia: null
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MIN_INPUT:
            return {
                ...state, min: action.min
            }
        case FETCH_MAX_INPUT:
            return {
                ...state, max: action.max
            }
        case FETCH_ZERO_TRANSFER:
            return {
                ...state, zeroTransfer: action.zeroTransfer
            }
        case FETCH_ONE_TRANSFER:
            return {
                ...state, oneTransfer: action.oneTransfer
            }
        case FETCH_FOR_ENCREMENT:
            return {
                ...state, encrement: action.encrement
            } 
        case FETCH_FOR_DECREMENT:
            return {
                ...state, decrement: action.decrement
            } 
        case FETCH_FOR_TIME:
            return {
                ...state, time: action.time
            } 
        case FETCH_AVIA:
            return {
                ...state, avia: action.avia
            }
        default:
            return state
    }
}