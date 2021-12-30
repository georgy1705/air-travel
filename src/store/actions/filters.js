import { 
    FETCH_AVIA,
    FETCH_FOR_DECREMENT,
    FETCH_FOR_ENCREMENT,
    FETCH_FOR_TIME,
    FETCH_MAX_INPUT, 
    FETCH_MIN_INPUT, 
    FETCH_ONE_TRANSFER,
    FETCH_ZERO_TRANSFER
} from "./actionTypes"

export function fetchMinInput(min) {
    return {
        type: FETCH_MIN_INPUT,
        min
    }
}

export function fetchMaxInput(max) {
    return {
        type: FETCH_MAX_INPUT,
        max
    }
}

export function fetchZeroTransfer(val) {
    return {
        type: FETCH_ZERO_TRANSFER,
        zeroTransfer: val
    }
}

export function fetchOneTransfer(val) {
    return {
        type: FETCH_ONE_TRANSFER,
        oneTransfer: val
    }
}

export function fetchForEncrement(val) {
    return {
        type: FETCH_FOR_ENCREMENT,
        encrement: val
    }
}

export function fetchForDecrement(val) {
    return {
        type: FETCH_FOR_DECREMENT,
        decrement: val
    }
}

export function fetchForTime(val) {
    return {
        type: FETCH_FOR_TIME,
        time: val
    }
}

export function fetchAvia(val) {
    return {
        type: FETCH_AVIA,
        avia: val
    }
}