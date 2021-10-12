import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { logout_user } from '../redux/user/ActionCreator'
function Nav(props) {
    const dispatch=useDispatch()
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout_user())
    }
    const user = useSelector(state => state.user)
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home Page </Link></li>
                {
                     user.loading && user.user?
                    (
                        <>
                        <li>User Name : { JSON.parse(user.user).name }</li>
                        <li><Link to="/create_post">Create Post</Link></li>
                        <li><a href="/logout" onClick={(e)=>handleLogout(e)}>Logout</a></li>
                        </>
                    ):
                    (   <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        </>
                    )
                }
                
            </ul>
        </div>
    )
}
export default Nav
