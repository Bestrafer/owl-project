const initialState = {
    games: [],
}

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GAMES_FETCHED' :
        {
            console.log(action.games);
            return Object.assign({}, state, {games: action.games});
        }
        default:
            return state;
    }
}
