import { database } from '../../database'

export const getGames = () => {
    return (dispatch) => {
        database.ref('/')
            .once('value', (snap) => {
                dispatch({
                    type: 'GAMES_FETCHED',
                    games: snap.val().games,
                })
            })
    }
}

