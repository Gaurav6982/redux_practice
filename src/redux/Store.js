// import { fetch_posts } from './posts/ActionCreator'
import  AllPostReducer  from './posts/AllPostReducer'
import userReducer from './user/CreateUserReducer';
import PostReducer from './posts/PostReducer';
import reduxThunk from 'redux-thunk';
import {applyMiddleware,createStore,combineReducers} from 'redux'

const rootReducer =combineReducers({
    user:userReducer,
    posts:AllPostReducer,
    post:PostReducer
})
export const store=createStore(rootReducer,applyMiddleware(reduxThunk))
// store.dispatch(fetch_posts())