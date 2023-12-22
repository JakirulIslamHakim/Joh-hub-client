import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../config/fitebase.config";
import useAxios from "../Hook/useAxios";

export const AuthContext = createContext();

const AuthProver = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  const googleProvider = new GoogleAuthProvider();

  // create an account with email and password
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user exist observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const userEmail = currentUser?.email || user?.email;

      if (userEmail) {
        axios.post("auth/accessToken", { email: userEmail }).then((res) => {
          // console.log(res);
        });
      } else {
        axios.get("auth/logout").then((res) => {
          // console.log(res);
        });
      }
      setLoading(false);
      // console.log(currentUser.email);
    });
    return () => unSubscribe();
  }, [user, axios]);

  // logout user
  const logoutUser = () => {
    setLoading(true);
    signOut(auth);
  };

  // all context value send an object
  const values = {
    user,
    loading,
    register,
    loginUser,
    googleLogin,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProver;
