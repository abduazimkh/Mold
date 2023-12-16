import React, { Suspense } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import  c from './Admin.module.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Sidebar__dummy } from '../../static/sidebar__dummy';
import { Loader } from '../../components/loader/Loader';
import { useTranslation } from 'react-i18next';

const Admin = () => {
  const {t} = useTranslation();
  const { path } = useRouteMatch();
  return (
    <div className={c.admin}>
      <Sidebar/>
      <div className={c.admin__container}>
      <Switch>
          {
            Sidebar__dummy().map(route__item => 
              <Route key={route__item.id} path={path + route__item.route}>
                  <Suspense fallback={<div className={c.loader__container}>
                    <Loader/>
                    <p>{t("loading")}</p>
                    </div>}>
                    {route__item.components}
                  </Suspense>
              </Route>  
            )
          }
        </Switch>
      </div>
    </div>
  )
}

export default Admin
