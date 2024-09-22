import { useEffect, useReducer, createContext } from "react";

// Initial state setup

const initialState = {
  user:
    localStorage.getItem("user") != undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: JSON.parse(localStorage.getItem("role")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
};

// Create context
export const authContext = createContext(initialState);

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

// Auth context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", JSON.stringify(state.role));
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};