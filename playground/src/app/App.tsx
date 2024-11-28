import { Suspense } from "react"
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core"
import { ThemeModeProvider } from "../_metronic/partials"
import { AuthInit } from "./modules/auth"
import { Outlet } from "react-router-dom"
import { I18nProvider } from "../_metronic/i18n/i18nProvider"

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <AuthInit>
              <Outlet />
            </AuthInit>
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }