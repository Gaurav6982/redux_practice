import { FETCH_POST_FAILURE,FETCH_POST_REQUEST,FETCH_POST_SUCCESS } from "./ActionTypes"
const initialState={
    loading:true,
    post:null,
    error:'',
}
 const PostReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POST_REQUEST: return{
            ...state,loading:true
        }
        case FETCH_POST_SUCCESS:return{
            loading:false,post:action.payload,error:''
        }
        case FETCH_POST_FAILURE : return {
            ...state,loading:false,error:action.payload
        }
        default: return state;
    }
}
export default PostReducer