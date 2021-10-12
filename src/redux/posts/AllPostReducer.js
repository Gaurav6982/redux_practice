import { FETCH_ALL_POSTS_FAILURE,FETCH_ALL_POSTS_SUCCESS,FETCH_ALL_POSTS_REQUEST } from "./ActionTypes";
import { CREATE_POST_REQUEST,CREATE_POST_FAILURE,CREATE_POST_SUCCESS } from "./ActionTypes"

const initialState={
    loading:true,
    posts:[],
    error:'',
}
 const AllPostReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_ALL_POSTS_REQUEST: return{
            ...state,loading:true
        }
        case FETCH_ALL_POSTS_SUCCESS:return{
            loading:false,posts:action.payload,error:''
        }
        case FETCH_ALL_POSTS_FAILURE : return {
            ...state,loading:false,error:action.payload
        }
        case CREATE_POST_REQUEST: return{
            ...state,loading:true
        }
        case CREATE_POST_SUCCESS:return{
            ...state,loading:false,posts:[action.payload,...state.posts]
        }
        case CREATE_POST_FAILURE : return {
            ...state,loading:false,error:action.payload
        }
        default: return state;
    }
}
export default AllPostReducer