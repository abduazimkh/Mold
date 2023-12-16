import React from 'react';
import c from './MainCategory.module.css';
import { useParams } from 'react-router-dom';
import useFetchWithoutParams from '../../hooks/fetch-hooks/useFetchWithoutParams';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import Navbar from '../../components/navbar/Navbar';
import ProductCatalog from '../../components/product-catalog/ProductCatalog';
import Adv from '../../components/adv/Adv';
import { useSelector } from 'react-redux';

const MainCategory = () => {
  const { language } = useSelector(state => state.lang);
  const {maincategoryName, subcategory} = useParams();
  const main = useFetchWithoutParams(`/category/categories/${maincategoryName}`);
  const sub = useFetchWithoutParams(`/category/subcategories/${subcategory}`);
  return (
    <div className={c.main__category}>
        <SubNavbar/>
        <Navbar absolute={true}/>
        {maincategoryName && main ? <ProductCatalog title={language === "uz" ? main?.data?.maincategoryTranslate?.uz : main?.data?.maincategoryTranslate?.ru} data={main.data?.maincategory} /> : <></>}
        {subcategory && sub  ? <ProductCatalog title={language === "uz" ? sub?.data?.subCategoryTranslate?.uz : sub?.data?.subCategoryTranslate?.ru} data={sub.data?.subCategory} /> : <></>}
        <Adv/>
    </div>
  )
}

export default MainCategory
