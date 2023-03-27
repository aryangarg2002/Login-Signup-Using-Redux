import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Link, Route, Router, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";


const App = () => {

  // const[abc,setabc] = useState(true);
  const users = useSelector(state =>state.users )
  const email = useSelector(state=>state.em)
  var loggedInUser = useSelector(state => state.loggedInUser)
  const dispatch = useDispatch()
  console.log(users);
  // console.log(email);

const history = useHistory();
// const routeChange = () => {
//   let path = "/Signup";
//   history.push(path);
// };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2> Hello {email}</h2>
          <button
            onClick={() =>
              dispatch({
                type: "LOGOUT",
              })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          {/* <Link to="/Login" className="btn btn-primary">
            Sign up
          </Link>

          <button onClick={() => history.push("/Login")}>Click me!</button> */}
          {/* <Router> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          {/* </Router> */}
        </div>
      )}
    </div>
  );
    
}

export default App