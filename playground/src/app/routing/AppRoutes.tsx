import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { App } from "../App"
import { AuthPage, Logout, useAuth } from "../modules/auth";
import { ErrorsPage } from "../modules/errors/ErrorsPage";

const { BASE_URL } = import.meta.env

const AppRoutes: FC = () => {
    const { currentUser } = useAuth()
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route element={<App />}>
                    <Route path="error/*" element={<ErrorsPage />} />
                    <Route path="logout" element={<Logout />} />
                    {currentUser ? (
                        <>
                            <Route path="/*" />
                            <Route index element={<Navigate to='/dashboard' />} />
                        </>
                    ) : (
                        <>
                            <Route path='auth/*' element={<AuthPage />} />
                            <Route path="*" element={<Navigate to="/auth" />} />
                        </>
                    )}
                    <Route path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }