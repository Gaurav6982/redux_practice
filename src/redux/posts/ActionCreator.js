import axios from "axios"
import { FETCH_ALL_POSTS_FAILURE, FETCH_ALL_POSTS_REQUEST, FETCH_ALL_POSTS_SUCCESS } from "./ActionTypes"
import { FETCH_POST_FAILURE,FETCH_POST_SUCCESS,FETCH_POST_REQUEST } from "./ActionTypes"
import { CREATE_POST_REQUEST,CREATE_POST_FAILURE,CREATE_POST_SUCCESS } from "./ActionTypes"
const fetch_posts_request=()=>{
    return {
        type:FETCH_ALL_POSTS_REQUEST,
    }
}

const fetch_posts_success=posts=>{
    return {
        type:FETCH_ALL_POSTS_SUCCESS,
        payload:posts
    }
}


const fetch_posts_failure=(err)=>{
    return {
        type:FETCH_ALL_POSTS_FAILURE,
        payload:err
    }
}

const fetch_post_request=()=>{
    return {
        type:FETCH_POST_REQUEST,
    }
}

const fetch_post_success=post=>{
    return {
        type:FETCH_POST_SUCCESS,
        payload:post
    }
}


const fetch_post_failure=(err)=>{
    return {
        type:FETCH_POST_FAILURE,
        payload:err
    }
}



export const fetch_posts=()=>{
    return (dispatch)=>{
        dispatch(fetch_posts_request())
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get('http://localhost/index.php/api/get_all_news',{
            headers:{
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then(function (response) {
            dispatch(fetch_posts_success(response.data))
        })
        .catch(function (error) {
            dispatch(fetch_posts_failure(error.message))
        });
    }
}

export const fetch_post=(id)=>{
    return (dispatch)=>{
        dispatch(fetch_post_request())
        axios.get(`http://localhost/index.php/api/get_news/${id}`,{})
        .then(function (response) {
            dispatch(fetch_post_success(response.data))
        })
        .catch(function (error) {
            dispatch(fetch_post_failure(error.message))
        });
    }
}


const create_post_request=()=>{
    return {
        type:CREATE_POST_REQUEST,
    }
}

const create_post_success=(post)=>{
    return {
        type:CREATE_POST_SUCCESS,
        payload:post,
    }
}


const create_post_failure=(err)=>{
    return {
        type:CREATE_POST_FAILURE,
        payload:err
    }
}



export const create_post=(post)=>{
    return (dispatch)=>{
        dispatch(create_post_request())
        const data={
            ...post,
            user_id:JSON.parse(localStorage.getItem("user")).user_id,
        }
        console.log(data)
        axios.post('http://localhost/index.php/api/set_news',JSON.stringify(data))
        .then(function (response) {
            dispatch(create_post_success(response.data))
            alert("Post Created Successfully!!")
        })
        .catch(function (error) {
            console.log(error.message)
            dispatch(create_post_failure(error.message))
        });
    }
}