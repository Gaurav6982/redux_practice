import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { login_user } from '../redux/user/ActionCreator';
function CreateUser(props) {
    const dispatch=useDispatch()
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const user=useSelector(state=>state.user)
    useEffect(() => {
        if(user.user!==null) history.push("/")
    }, [user.user])
    const handleSubmit=()=>{
        const user={
            email:email,
            password:password
        }
         dispatch( login_user(user))
      
    }
    return (
        <div className="center"> 
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Email : </label><br/>
                            <input type="textarea" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label><br/>
                            <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={handleSubmit}>Login User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateUser
