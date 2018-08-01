import axios from 'axios'

let initialState = {
    starWarsCharacters: [],
    errorMessage: ''
}

let GET_CHARACTERS = 'GET_CHARACTERS'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_CHARACTERS_PENDING':
            return state;
        case 'GET_CHARACTERS_FULFILLED':
            return {
                starWarsCharacters: action.payload.data,
                errorMessage: ''
            }
        case 'GET_CHARACTERS_REJECTED':
            return {
                starWarsCharacters: [],
                errorMessage: action.payload
            }
        default:
         return state;
    }
}

export function getCharacters() {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('/api/characters')
    }
}

