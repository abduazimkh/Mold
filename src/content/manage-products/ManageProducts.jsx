import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import useFetchWithoutParams from '../../hooks/fetch-hooks/useFetchWithoutParams';
import AllProducts from '../../components/allproducts/AllProducts';
import ContentTitle from '../../components/content-title/ContentTitle';
import c from './ManageProducts.module.css';
import { t } from 'i18next';

   
const Manage = () => {
  const manageState = useSelector(state => state.manage); 
  // eslint-disable-next-line
  const { data, isLoading} = useFetchWithoutParams(manageState?.url);
  useEffect(() => {
    store.dispatch({
      type: "LOAD_MANAGE"
    })
  }, [])
  return (
    <div className={c.manage}>
      <ContentTitle title={t("ManageProducts.title")}/>
      
      <AllProducts data={data} isLoading={isLoading}/>
    </div>
  )
}

export default Manage
