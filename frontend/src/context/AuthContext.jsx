import { useContext, useEffect, useState, createContext } from "react";
import Cookie from "js-cookie";
import axios from "../api/axios";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = async (data) => {
    try {
      const res = await axios.post('/signin', data);
      setUser(res.data);
      setIsAuth(true);
      setErrors(null);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post('/signup', data);
      setUser(res.data);
      setIsAuth(true);
      setErrors(null);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  const signout = async () => {
    await axios.post('/signout');
    setUser(null);
    setIsAuth(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      if (Cookie.get('token')) {
        try {
          const res = await axios.get('/profile');
          setUser(res.data);
          setIsAuth(true);
        } catch (err) {
          setUser(null);
          setIsAuth(false);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        signout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
