import { Suspense } from "react"
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core"
import { ThemeModeProvider } from "../_metronic/partials"
import { AuthInit } from "./modules/auth"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <LayoutProvider>
        <ThemeModeProvider>
          <AuthInit>
            <Outlet />
          </AuthInit>
        </ThemeModeProvider>
      </LayoutProvider>
    </Suspense>
  )
}

export { App }