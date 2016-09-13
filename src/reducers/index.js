import {combineReducers} from 'redux'
import UserReducer from './reducer-user'
import MovieReducer from './reducer-movie'

const allReducers = combineReducers({
    users:UserReducer,
    movies:MovieReducer
})

export default allReducers