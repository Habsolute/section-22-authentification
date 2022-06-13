import React, { useSate } from "react";

const AuthContext = React.createContext({
  toket: "",
  isLoggindIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useSate(null)
  const user

  return <AuthContext.provider>{props.children}</AuthContext.provider>;
};
