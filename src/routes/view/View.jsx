import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import useFetchSingleProduct from '../../hooks/fetch-hooks/useFetchSingleProduct';
import { useParams } from 'react-router-dom';
import c from './View.module.css';
import ProductView from '../../components/product-view/ProductView';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import Adv from '../../components/adv/Adv';
import { Loader } from '../../components/loader/Loader';
   
const View = () => {
  const {productId} = useParams();
  // eslint-disable-next-line
  const { product, isLoading } = useFetchSingleProduct(productId);
  return (
    <div className={c.view}>
      <SubNavbar/>
      <Navbar/>
     {
     !isLoading && product ?
      <ProductView isLoading={isLoading} product={product[0]}/>
      :
      <div className={c.product__viewLoader}>
        <Loader/>
    </div>}
    <Adv/>
    </div>
  )
}

export default View
