import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const API_URL =  import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    () => sessionStorage.getItem("accessToken")
  );
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      if (!accessToken) {
        setUser(null);
        return;
      }

      const response = await fetch(
        `${API_URL}/api/auth/me`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        setUser(null);
        setAccessToken(null);
        sessionStorage.removeItem("accessToken");
        return;
      }

      const data = await response.json();

      setUser(data.user);

    } catch (error) {
      console.error(
        "Authentication check failed:",
        error
      );

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = ({ user, accessToken }) => {
    setUser(user);
    setAccessToken(accessToken);

    sessionStorage.setItem(
      "accessToken",
      accessToken
    );
  };

  const logout = async () => {
    try {
      if (accessToken) {
        await fetch(
          `${API_URL}/api/auth/logout`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setAccessToken(null);

      sessionStorage.removeItem(
        "accessToken"
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}