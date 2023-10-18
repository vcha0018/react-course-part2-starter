import React, { Dispatch } from "react";
import { AuthAction } from "./authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext({} as AuthContextType);

export default AuthContext;
