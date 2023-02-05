import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Session } from "../App";



const UserPermission = ({ children }) => {
    const session = useContext(Session).isLogin
    const location = useLocation();


    if (session !== 1) {
        return <Navigate to='/' state={{ from: location }} replace />
    }
    return children
}

export default UserPermission

