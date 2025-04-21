import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    toast.error('Please login to access this page');
    return <Navigate to="/app/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
