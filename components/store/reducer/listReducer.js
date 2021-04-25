export default function listReducer(state = [], action) {
    switch (action.type) {
        case 'GET_LIST':
            return action.payload;
    }
    return state;
}