import React from 'react';
import c from './Home.module.css';
import Banner from '../../components/banner/Banner'
import Navbar from '../../components/navbar/Navbar';
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import useFetchWithoutParams from '../../hooks/fetch-hooks/useFetchWithoutParams';
import SubNavbar from '../../components/sub-navbar/SubNavbar';
import Adv from '../../components/adv/Adv';

const Home = () => {
  const { data } = useFetchWithoutParams("category/category-reel");
  return (
    <div className={c.home}>
      <SubNavbar/>
      <Navbar sidebar={true}/>
      <div className={c.banner__container}>
      <Banner />
      </div>
      <div className={c.home__container}>
        {data &&
          data?.slice(0, 4).map((category__reel, indx) => 
            <ProductWrapper key={indx} title={category__reel} data={category__reel?.allRefinedProducts}/>
          )
        }
      </div>
      <Adv/>
    </div>
  )
}

export default Home
