
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Post from './components/Post';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import CreatePost from './components/CreatePost';
function App() {
  // const [posts,setPosts]=useState([]);
  //   useEffect(function(){
  //       axios.get('https://jsonplaceholder.typicode.com/posts')
  //       .then(function (response) {
  //           setPosts(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   },[])
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Nav/>
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/create_post" component={CreatePost}/>
        <Route exact path="/posts/:id" component={Post}/>
        <Route path="/" component={()=><Home/>}/>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
