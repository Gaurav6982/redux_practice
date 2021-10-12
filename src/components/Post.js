import React,{useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { fetch_post } from '../redux/posts/ActionCreator'
function Post() {
    const params=useParams()
    const dispatch=useDispatch()
    useEffect(function(){
        dispatch(fetch_post(parseInt(params.id)))
    },[params.id])
    // const history=useHistory()
    const post=useSelector(state=>state.post)
    return (
        <div className="center"> 
            <Link to="/">Back</Link>
        {
            post.post?(
                    <div className="card">
                        <div className="card-header">
                            {post.post.title}
                        </div>
                        <div className="card-body">
                            {post.post.text}
                        </div>
                    </div>
                    ):(
                    <div>Loading...</div>
                )
            
            
        }
        </div>
        
    )
}
export default Post
