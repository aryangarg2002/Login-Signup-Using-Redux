import { legacy_createStore as createStore } from 'redux';

const initialState = { 
    users:[],
    loggedInUser : false,
    em : ""
}

const reducer = (state = initialState ,action) =>{
    switch (action.type) {
      case "REGISTER":
        return {
          ...state,
          users: [...state.users, action.payload],
          em : action.em,
          loggedInUser: true,
        };

      case "LOGOUT":
        return {
          ...state,
          loggedInUser: false,
        };

        case "LOGIN" :
            return {
                ...state,
                loggedInUser: true,
                em : action.em
            }
      default:
        return state;
    }
}

export default createStore(reducer)