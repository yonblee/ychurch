const { useLocation, Outlet, Navigate } = require("react-router-dom");

const PrivateRoutes = () => {
    const location = useLocation();
    const authLogin = undefined
    // const { authLogin } = /* some auth state provider */;
  
    if (authLogin === undefined) {
      return null; // or loading indicator/spinner/etc
    }
  
    return authLogin 
      ? <Outlet />
      : <Navigate to="auth/login" replace state={{ from: location }} />;
  }

  export default PrivateRoutes