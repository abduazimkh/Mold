import React, { useState } from 'react'
import useFetchWithoutParams from '../../hooks/fetch-hooks/useFetchWithoutParams';
import AdminProduct from '../admin-product/AdminProduct';
import notFoundImage from '../../assets/no-results.png';
import c from './AllProducts.module.css';
import { Loader } from '../loader/Loader';
import {t} from 'i18next'

const AllProducts = ({data, isLoading}) => {
  
  const [search, setSearch] = useState('');
 
  const searchedProducts = useFetchWithoutParams(`/product/search/${search}`);

  return (
    <>
    <div className={c.search__adminproducts}>
      
      <input type="text" placeholder={t("AllProducts.placeholder")} value={search} onChange={e => setSearch(e.target.value)}/>
      <h1>{t("AllProducts.product_count")} {data?.allproducts?.length}</h1>
    </div>
    {search?.length > 1 && searchedProducts.data?.length < 1 && !searchedProducts.isLoading ?  <div className={c.not__found}>
      <img  src={notFoundImage} alt="" />
      <p>{t("AllProducts.notFound")}</p>
      </div> : <></>}

    <div className={c.allproducts}>
      {
        isLoading ?
        <div className={c.loader__wrapper}>
          <Loader/>
          <p>{t("AllProducts.upload")}</p>
        </div>
        :
        search.length < 1 ? data?.allproducts.map(adminproduct => 
          <AdminProduct key={adminproduct?._id} data={adminproduct}/>
        ) :
        searchedProducts.data?.map(adminproduct => 
          <AdminProduct key={adminproduct?._id} data={adminproduct}/>
        )

      }
    </div>
    
    </>
  )
}

export default AllProducts
