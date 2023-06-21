import { createContext, useState } from "react";

export const AuthContent = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider() {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return (
    <AuthContent.AuthContextProvider value={value}>
      {children}
    </AuthContent.AuthContextProvider>
  );
}

export default AuthContextProvider;
