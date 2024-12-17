import axios from "axios";
import { createContext, useReducer } from "react";

export const userContext = createContext();

const API = "http://jsonplaceholder.typicode.com/users";

const INIT_STATE = {
  users: [],
}; //INIT_STATE: The initial state object for the reducer, containing an empty users array.

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    //state: The current state of the application.
    //action: An object containing type (action name) and payload (data to update the state).
    //GET_USERS: Updates the users array in the state with the data received in the action.payload
    //default: Returns the unchanged state if the action.type doesn't match any case.

    default:
      return state;
  }
};

//MainProvider: A functional component that wraps around other components to provide context.
//children: The nested components inside MainProvider that can access the context.
const MainProvider = ({ children }) => {
  //useReducer: A React hook used for state management. It initializes with INIT_STATE and uses the reducer function to update the state.
  //state: Holds the current state.
  //dispatch: A function to send actions to the reducer.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getUsers() {
    try {
      let { data } = await axios(API); // Makes a GET request to fetch user data from the API.
      let action = {
        type: "GET_USERS",
        payload: data,
      };
      dispatch(action); // Dispatches the action to update the state with the fetched data.
    } catch (error) {
      console.log(error); // Logs any errors during the API call.
    }
  }

  return (
    <userContext.Provider value={{ getUsers, users: state.users }}>
      {children}
    </userContext.Provider>
  );
};
export default MainProvider;
