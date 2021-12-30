import axios from "../../axios/axios-travel"
import { 
    FETCH_COMPANY,
    FETCH_TRAVELS_ERROR, 
    FETCH_TRAVELS_START, 
    FETCH_TRAVELS_SUCCESS 
} from "./actionTypes"


export function fetchTravels() {
    return async dispatch => {
        dispatch(fetchTravelsStart())
        try {
            const response = await axios.get('/result.json')
            const travels = []
            const data = response.data.flights

            data.forEach((item, index) => {
                travels.push({
                    id: index,
                    caption: item.flight.carrier.caption,
                    passengerPrice: item.flight.price.passengerPrices[0].singlePassengerTotal.amount,
                    arrivalSegment: item.flight.legs[0].segments[0],
                    departureSegment: item.flight.legs[0].segments[1]
                })
            })

            dispatch(fetchTravelsSuccess(travels))
        } catch (e) {
            dispatch(fetchTravelsError(e))
        }
    }
}

export function fetchTravelsStart() {
    return {
        type: FETCH_TRAVELS_START
    }
}

export function fetchTravelsSuccess(travels) {
    return {
        type: FETCH_TRAVELS_SUCCESS,
        travels
    }
}

export function fetchTravelsError(e) {
    return {
        type: FETCH_TRAVELS_ERROR,
        error: e
    }
}

export function fetchCompany(companies) {
    return {
        type: FETCH_COMPANY,
        companies
    }
}