import { createContext } from "react";

interface AuthContextType {
  user: {},
  login: (data: any) => void,
  logoutUser: () => void,
  loading: boolean
}
export const AuthContext =  createContext<AuthContextType>({
  user: {},
  login: () => {},
  logoutUser: () => {},
  loading: false
})
