import { FC, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import TopBarProgress from 'react-topbar-progress-indicator'
import { WithChildren } from "../../_metronic/helpers"
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils"

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route path="auth/*" element={<Navigate to="/dashboard" />} />
            </Route>
        </Routes>
    )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
    const baseColor = getCSSVariableValue('--bs-primary')
    TopBarProgress.config({
        barColors: {
            '0': baseColor,
        },
        barThickness: 1,
        shadowBlur: 5,
    })
    return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }