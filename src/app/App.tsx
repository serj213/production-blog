import './styles/app.scss'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { AppRouter } from 'app/providers/router'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar'
import { PageLoader } from 'widgets/PageLoader'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', { hover: true, select: false }, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
