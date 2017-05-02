const initialState = {
    entities: [],
}

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GAMES_FETCHED':
        {
            return Object.assign({}, state, { entities: action.games });
        }
        default:
            return state;
    }
}
