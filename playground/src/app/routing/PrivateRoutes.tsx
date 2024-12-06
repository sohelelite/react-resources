import { FC, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import TopBarProgress from 'react-topbar-progress-indicator'
import { WithChildren } from "../../_metronic/helpers"
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils"
import { MasterLayout } from "../../_metronic/layout/MasterLayout"
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper"
import UsersPage from "../modules/apps/user-management/UsersPage"
import ProductsPage from "../modules/products/ProductsPage"



const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<MasterLayout />}>
                <Route path="auth/*" element={<Navigate to="/dashboard" />} />
                <Route path="dashboard" element={<DashboardWrapper />} />
                <Route path="apps/user-management/*"
                    element={
                        <SuspensedView>
                            <UsersPage />
                        </SuspensedView>
                    } />
                <Route path="apps/products/*"
                    element={
                        <SuspensedView>
                            <ProductsPage />
                        </SuspensedView>
                    }
                />
                <Route path="*" element={<Navigate to="/error/404" />} />
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