import { Navigate, Routes } from "react-router-dom";
import { useAuth } from "./core/Auth";
import { useEffect } from "react";

export function Logout() {

    const { logout } = useAuth()

    useEffect(() => {
        logout()
        document.location.reload()
    }, [Logout])

    return (
        <Routes>
            <Navigate to="/auth/login" />
        </Routes>
    )
}