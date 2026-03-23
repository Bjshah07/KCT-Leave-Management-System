import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuth(!!token);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) return <div className="flex items-center justify-center h-screen bg-slate-100">Loading...</div>;
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
