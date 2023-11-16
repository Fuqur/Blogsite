import { createContext, FC, ReactNode, useState,useEffect,useMemo } from "react";
import { IUser, TypeSetState } from "../../types";
import { onAuthStateChanged,getAuth,Auth } from "firebase/auth";
import {Firestore, getFirestore} from 'firebase/firestore'

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga:Auth
  db:Firestore
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

const ga = getAuth()
const db = getFirestore()

useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser)
      setUser(
           {
              id: authUser.uid,
              avatar: authUser.photoURL || '',
              name: authUser.displayName || '',
            }
      )
      
      else setUser(null)
    });

    return () => {
     unListen();
    };
  }, [ga, setUser]);

const values =useMemo(()=>({
    user, 
    setUser,
    ga,
    db,
}),[user,ga,db])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};