import React,{useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetch_posts } from '../redux/posts/ActionCreator'
function Home() {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetch_posts())
    }, [])
    const posts=useSelector(state=>state.posts)
    return (
        <div className="container">
            <h1>Home Page</h1>
            <div className="card">
            <div className="card-header">Available Posts</div>
            <div className="card-body">
                {/* {JSON.stringify(posts)} */}
            {

                posts.posts.length===0?<div>Loading......</div>:(
                        Array.isArray(posts.posts)?
                        posts.posts.map(post=>{
                            return (
                                        <div className="card" key={post.id}>
                                            <Link to={`posts/${post.id}`} ><div className="card-body"> {post.title} by {post.name}</div></Link>
                                        </div>
                                    )
                        }):<div>Something Went Wrong</div>
                    
                )
            }
             </div>
            </div>
        </div>
    )
}

export default Home
