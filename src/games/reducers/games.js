const initialState = {
    entities: [],
}

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GAMES_FETCHED':
        {
            const gameList = action.games;
            let result = [];

            for (var key in gameList) {
                result.push(...[{
                    key,
                    title: gameList[key].title,
                    owner: gameList[key].owner.name,
                    minPlayers: gameList[key].minNumber,
                    maxPlayers: gameList[key].maxNumber,
                }]);
            }

            return Object.assign({}, state, { entities: result });
        }
        default:
            return state;
    }
}
