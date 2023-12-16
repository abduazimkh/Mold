import React, { lazy, } from 'react';
import { ReactComponent as Cart} from '../assets/admin/cart.svg';
import { ReactComponent as Plus} from '../assets/admin/plus.svg';
import { ReactComponent as Manage} from '../assets/admin/manage.svg';
import { ReactComponent as Chart} from '../assets/admin/chart.svg';
import { useTranslation } from 'react-i18next';
const Create = lazy(() => import('../content/create/Create')) ;
const Order = lazy(() => import('../content/order/Order'));
const ManageProducts = lazy(() => import('../content/manage-products/ManageProducts'));
const Analitics = lazy(() => import('../content/analitics/Analitics'));

export const Sidebar__dummy = () => {
  const {t} = useTranslation()
 return  [
    {
      id: 0,
      title: t("order"),
      route: "/orders",
      icon: <Cart/>,
      components: <Order/>
    },
    {
      id: 1,
      title: t("manage"),
      route: "/manage",
      icon: <Manage/>,
      components: <ManageProducts/>
    },
    {
      id: 2,
      title: t("create"),
      route: "/create",
      icon: <Plus/>,
      components: <Create/>
    },
    {
      id: 3,
      title: t("analitics"),
      route: "/analitics",
      icon: <Chart/>,
      components: <Analitics/>
    },
    // {
    //   id: 4,
    //   title: t("analitics"),
    //   route: "/analitics",
    //   icon: <Chart/>,
    //   components: <Analitics/>
    // }
  ]
} 