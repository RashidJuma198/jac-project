import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('signin');

  const login = (username, email) => {
    setUser({ username, email });
  };

  const logout = () => setUser(null);

  return {
    user,
    isLoggedIn: !!user,
    mode,
    setMode,
    login,
    logout,
  };
}
