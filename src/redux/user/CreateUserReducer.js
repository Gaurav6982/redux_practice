import { CREATE_USER_FAILURE,CREATE_USER_SUCCESS,CREATE_USER_REQUEST, LOGOUT_USER } from "./ActionTypes";
import { LOGIN_USER_FAILURE,LOGIN_USER_SUCCESS,LOGIN_USER_REQUEST } from "./ActionTypes";
const initialState={
    loading:true,
    user:localStorage.getItem("user"),
    msg:''
}
 const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case CREATE_USER_REQUEST: return{
            ...state,loading:true
        }
        case CREATE_USER_SUCCESS:return{
            loading:false,user:action.payload,msg:''
        }
        case CREATE_USER_FAILURE : return {
            ...state,loading:false,msg:action.payload
        }
        case LOGIN_USER_REQUEST: return{
            ...state,loading:true
        }
        case LOGIN_USER_SUCCESS:return{
            loading:false,user:action.payload,msg:''
        }
        case LOGIN_USER_FAILURE : return {
            ...state,loading:false,msg:action.payload
        }
        case LOGOUT_USER : return {
            ...state,user:null,msg:action.payload
        }
        default:return state;
    }
}
export default userReducer