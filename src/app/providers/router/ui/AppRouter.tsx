import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routerConfig/routerConfig'

export const AppRouter = () => {
  return (
    <Routes>
      {
        Object.values(routerConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={<div className="content-wrapper">{element}</div>} />
        ))
      }
    </Routes>
  )
}
