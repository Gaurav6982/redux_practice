import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { create_post } from '../redux/posts/ActionCreator';
import { useHistory } from 'react-router-dom';
function CreatePost(props) {
    const history = useHistory();
    const user=useSelector(state=>state.user.user)
    useEffect(() => {
        if(localStorage.getItem("user")===null) history.push("/login")
    }, [user])
    const dispatch=useDispatch()
    const [title,setTitle]=useState("");
    const [text,setText]=useState("");
    const handleSubmit=()=>{
        const post={
            title:title,
            text:text
        }
        setTitle("")
        setText("")
        dispatch(create_post(post));
    }
    return (
        <div className="center"> 
            <div className="card">
                <div className="card-header">
                    CreatePost
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Title : </label><br/>
                            <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Text : </label><br/>
                            <textarea className="form-control" value={text} onChange={e=>setText(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={handleSubmit}>Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
