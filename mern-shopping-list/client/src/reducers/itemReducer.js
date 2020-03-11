import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
    items: [
        { id: uuidv4(), name: 'Eggs' },
        { id: uuidv4(), name: 'Milk' },
        { id: uuidv4(), name: 'Steak' },
        { id: uuidv4(), name: 'Water' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case ADD_ITEM: 
            return {
                ...state,
                items:[...state.items, action.payload]
            }
            
        case DELETE_ITEM: 
            return {
                ...state,
                items:state.items.filter(item => (
                    item.id !== action.payload
                ))
            }
        default:
            return state;
    }
}
