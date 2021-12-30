import { 
    FETCH_COMPANY,
    FETCH_TRAVELS_ERROR, 
    FETCH_TRAVELS_START, 
    FETCH_TRAVELS_SUCCESS 
} from "../actions/actionTypes";


const initialState = {
    travels: [],
    companies: [],
    loading: false
}

export default function travelReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRAVELS_START:
            return {
                ...state, loading: true
            }
        case FETCH_TRAVELS_SUCCESS:
            return {
                ...state, travels: action.travels, loading: false
            }
        case FETCH_TRAVELS_ERROR:
            return {
                ...state, error: action.error, loading: false
            }
        case FETCH_COMPANY:
            return {
                ...state, companies: action.companies
            }
        default:
            return state
    }
}