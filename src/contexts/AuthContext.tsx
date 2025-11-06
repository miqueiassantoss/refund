import { createContext } from "react"
import type { ReactNode } from "react"

export const AuthContext = createContext({})

export function AuthProvider({children}: {children: ReactNode}) {
  return (
    <AuthContext.Provider
      value={{ name: "Mike", email: "miqueias@email.com" }}
    >
      {children}

    </AuthContext.Provider>
  )
}