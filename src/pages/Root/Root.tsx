import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import NotFound from '../public/NotFound/NotFound';
import {useSelectorHook} from '../../hooks/useSelectorHook';

const Root = () => {
  const {isAuth} = useSelectorHook(state => state.auth)

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}

      {publicRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default Root