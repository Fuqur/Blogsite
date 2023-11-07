import { createContext, FC, ReactNode, useState,useEffect,useMemo } from "react";
import { IUser, TypeSetState } from "../../types";
import { onAuthStateChanged,getAuth,Auth } from "firebase/auth";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga:Auth
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

const ga = getAuth()

useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      setUser(
        authUser
          ? {
              id: authUser.uid,
              avatar: authUser.photoURL || '',
              name: authUser?.displayName || '',
            }: null);
    });
    return () => {
     unListen();
    };
  }, [ga, setUser]);

const values =useMemo(()=>({
    user, 
    setUser,
    ga,
}),[user,ga])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};