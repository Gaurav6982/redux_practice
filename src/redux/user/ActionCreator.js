import axios from "axios"
import { CREATE_USER_REQUEST,CREATE_USER_FAILURE,CREATE_USER_SUCCESS, LOGOUT_USER } from "./ActionTypes"
import { LOGIN_USER_FAILURE,LOGIN_USER_SUCCESS,LOGIN_USER_REQUEST } from "./ActionTypes"
const create_user_request=()=>{
    return {
        type:CREATE_USER_REQUEST,
    }
}

const create_user_success=msg=>{
    return {
        type:CREATE_USER_SUCCESS,
        payload:msg
    }
}


const create_user_failure=(err)=>{
    return {
        type:CREATE_USER_FAILURE,
        payload:err
    }
}

export const create_user=(user)=>{
    return (dispatch)=>{
        console.log(user)
        dispatch(create_user_request())
        axios.post('http://localhost/index.php/api/add_user',JSON.stringify(user))
        .then(function (response) {
            console.log(response.data)
            localStorage.setItem("user",JSON.stringify(response.data.data));
            dispatch(create_user_success(response.data.data))
        })
        .catch(function (error) {
            console.log(error)
            dispatch(create_user_failure(error.message))
        });
    }
}



const login_user_request=()=>{
    return {
        type:LOGIN_USER_REQUEST,
    }
}

const login_user_success=user=>{
    return {
        type:LOGIN_USER_SUCCESS,
        payload:user
    }
}


const login_user_failure=(err)=>{
    return {
        type:LOGIN_USER_FAILURE,
        payload:err
    }
}

export const login_user=(user)=>{
    return (dispatch)=>{
        dispatch(login_user_request())
        axios.post('http://localhost/index.php/api/attempt_login',JSON.stringify(user))
        .then(function (response) {
            console.log(response)
            if(response.status===200){
                localStorage.setItem("user",JSON.stringify(response.data.data));
                dispatch(login_user_success(response.data.data))
            }
            else{
                dispatch(login_user_failure(response.msg))
            }
        })
        .catch(function (error) {
            dispatch(login_user_failure("Something Went Wrong!"))
        });
    }
}

const logout_user_success=(msg)=>{
    return {
        type:LOGOUT_USER,
        payload:msg
    }
}

export const logout_user=()=>{
    return (dispatch)=>{
        const user=localStorage.getItem("user")
        axios.post('http://localhost/index.php/api/attempt_logout',JSON.stringify(user))
        .then(function (response) {
            console.log(response.data)
            localStorage.clear()
            dispatch(logout_user_success(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}