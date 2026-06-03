import { useContext, useEffect, useState, createContext, ReactNode } from "react";
import Cookie from "js-cookie";
import axios from "../api/axios";

export interface User {
  id: string | number;
  name: string;
  email: string;
  gravatar?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  errors: string[] | null;
  signup: (data: any) => Promise<any>;
  signin: (data: any) => Promise<any>;
  signout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signin = async (data: any) => {
    try {
      const res = await axios.post("/signin", data);
      setUser(res.data);
      setIsAuth(true);
      setErrors(null);
      return res.data;
    } catch (error: any) {
      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors([error.message || "Error al iniciar sesión"]);
      }
    }
  };

  const signup = async (data: any) => {
    try {
      const res = await axios.post("/signup", data);
      setUser(res.data);
      setIsAuth(true);
      setErrors(null);
      return res.data;
    } catch (error: any) {
      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors([error.message || "Error al registrarse"]);
      }
    }
  };

  const signout = async () => {
    await axios.post("/signout");
    setUser(null);
    setIsAuth(false);
  };

  useEffect(() => {
    setLoading(true);
    if (Cookie.get("token")) {
      axios
        .get("/profile")
        .then((res) => {
          setUser(res.data);
          setIsAuth(true);
        })
        .catch(() => {
          setUser(null);
          setIsAuth(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (errors) {
      const clean = setTimeout(() => {
        setErrors(null);
      }, 5000);

      return () => clearTimeout(clean);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
