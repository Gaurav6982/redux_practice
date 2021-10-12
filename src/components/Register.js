import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { create_user } from '../redux/user/ActionCreator';
function Register(props) {
    const history = useHistory();
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const user=useSelector(state=>state.user.user)
    useEffect(() => {
        if(user!==null) history.push("/")
    }, [user,history])
    const handleSubmit=()=>{
        const user={
            name:name,
            email:email,
            password:password
        }
        dispatch(create_user(user));
        // props.create_user(user);
    }
    return (
        <div className="center"> 
            <div className="card">
                <div className="card-header">
                    Register
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label>Name : </label><br/>
                            <input type="textarea" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Email : </label><br/>
                            <input type="textarea" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label><br/>
                            <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={handleSubmit}>Register User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
