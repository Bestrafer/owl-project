import { gamesReducer } from './games/reducers/games'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    games: gamesReducer,
})

export default rootReducer;
