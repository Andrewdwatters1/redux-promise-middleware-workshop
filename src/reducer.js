import axios from 'axios'

let initialState = {
    starWarsCharacters: [],
    errorMessage: ''
}

let GET_CHARACTERS = 'GET_CHARACTERS'
let DELETE_CHARACTER = 'DELETE_CHARACTER'

export default function reducer(state = initialState, action) {
    //The main thing redux-promise middleware does for us is append _FULFILLED, _REJECT and _PENDING to each action type on our action. We can have a case to handle updating state unique to each of these states. When it is pending, generally we don't do much to update state but we could. _FULFILLED is where we get back our response from the server so this is where we would handle updating state with the new data. _REJECTED will be called if there was an issue with the server, the route wasn't found of anything else that would cause an error. redux-promise-middleware also allows us to see our cases and how state is being handled in one place.
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
        case 'DELETE_CHARACTER_FULFILLED':
            return {
                starWarsCharacters: action.payload.data, 
                errorMessage: ''
            }
        case 'DELETE_CHARACTER_REJECTED':
            return {
                starWarsCharacters: [], 
                errorMessage: action.payload
            }
        default:
         return state;
    }
}

export function getCharacters() {
    //With redux-promise-middleware we pass our initial axios call as the payload. We don't need to do any sort of .then handling here
    return {
        type: GET_CHARACTERS,
        payload: axios.get('/api/characters')
    }
}

export function deleteCharacter(id) {
    return {
        type: DELETE_CHARACTER,
        payload: axios.delete(`/api/characters/${id}`)
    }
}
