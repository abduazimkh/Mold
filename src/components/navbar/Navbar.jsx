import React, { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import cartImage from '../../assets/home/cart.svg'
import c from './Navbar.module.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../navbar-sidebar/NavbarSidebar';
import { useSelector } from 'react-redux';
import notFoundImage from '../../assets/no-results.png';
import logo from '../../assets/logo.svg';
import useFetchWithoutParams from '../../hooks/fetch-hooks/useFetchWithoutParams';
import { useTranslation } from 'react-i18next';
import Cart from '../../routes/cart/Cart';

const Navbar = ({sidebar, absolute}) => {
  const { language } = useSelector(state => state.lang);
  const [cartOpen, setCartOpen] = useState(false);
  const { t } = useTranslation() 
  const [search, setSearch] = useState('');
  const { cart } = useSelector(state => state.cart);
  const quantity = cart.map(product => product?.quantity).reduce((a, b) => a + b, 0);
  const totalcost = cart.map(product => product.quantity *  +product.cost).reduce((a, b) => a + b, 0)
  const { data, isLoading } = useFetchWithoutParams(`/product/search/${search}`);

  useEffect(() => {
    if(cartOpen){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [cartOpen])

  return (
    <>
    <div className={c.navbar}>
      <div className={c.navbar__main}>
        <div className={c.navbar__maincontainer}>
          <Link className={c.navbar__logo} to="/">
            <img  src={logo} alt="" />
          </Link>
          <div className={c.navbarmain__searchbar}>
           <form>
              <input className={c.searchbar__input} type="text" placeholder={t("search")} value={search} onChange={e => setSearch(e.target.value)}/>
              <button className={c.search__submit}> <FiSearch/> </button>
           </form>
          {search.length >= 1 && <div className={c.search__results}>
            {isLoading && <p>Searching...</p>}
            {search.length >= 1 && <div className={c.search__resultsHeader} style={{display: "flex", alignItems: "center", justifySelf: "flex-start", width: "100%", justifyContent: "space-between"}}> <div style={{display: "flex", alignItems: "center"}}>{t("result")} <div className={c.search__indicator}> #{search}</div></div>   <div style={{display: "flex", alignItems: "center"}}><p style={{padding: "0px 30px"}}>{data?.length} {t("word")}</p>  <p style={{color: "dodgerblue", cursor: "pointer"}} onClick={() => setSearch('')}>{t("cancel")}</p></div> </div>}
            {search.length >= 1 && data.length < 1 && !isLoading ?  <img style={{marginTop: "20px"}} src={notFoundImage} alt="" /> : <></>}
            {
              data?.map(searchedProduct => 
                <div className={c.search__result__products}>
                  <img src={searchedProduct?.productImages[0]} alt="" />
                  <div>
                  <Link to={`/product-view/${searchedProduct?._id}`}>
                    {
                    language === "uz"?
                    searchedProduct?.productName_uz.length > 40 ? 
                      searchedProduct?.productName_uz.slice(0,40).split(" ").slice(0,-1).join(" ") + "..."
                      :
                      searchedProduct?.productName_uz
                      :
                      searchedProduct?.productName_ru.length > 40 ? 
                      searchedProduct?.productName_ru.slice(0,40).split(" ").slice(0,-1).join(" ") + "..."
                      :
                      searchedProduct?.productName_ru
                    }
                    </Link>
                    </div>
                  <p>{searchedProduct?.productSizesAndQuantity[0].price + "CУМ - " + searchedProduct?.productSizesAndQuantity[searchedProduct?.productSizesAndQuantity.length - 1].price +  " CУМ"}</p>
                </div>  
              )
            }
           </div> 
           }
          </div>
           <div className={c.navbarmain__orderContainer}  onClick={() => setCartOpen(true)}>
            <div className={c.navbarmain__order} >
              <p className={c.order__counter}>{quantity}</p>
              <img src={cartImage} alt=""/>
            </div>
            <div className={c.navbar__maincost}>
              <p>{`${totalcost}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
              <span>CУМ</span>
            </div>
           </div>
           
        </div>
      </div>
      
      <div className={c.navbar__secondary}>
        <div className={c.navbarsecondary__container}>
          {sidebar && <NavbarSidebar/>}
          <div className={c.navbar__topcategoriesCon} style={absolute ? {marginLeft: "60px"} : null}>   
            <ul className={c.navbar__topcategories} >
              <li className={c.top__categoryitem}><Link to="/">{t("additional__links.main")}</Link></li>  
              <li className={c.top__categoryitem}><Link to="/partners">{t("additional__links.partners")}</Link></li>
              <li className={c.top__categoryitem}><Link to="/about">{t("additional__links.about")}</Link></li>  
              <li className={c.top__categoryitem}><Link to="/contact">{t("additional__links.contact")}</Link></li>  
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    {cartOpen && <div className={c.overlay} onClick={() => setCartOpen(false)}></div>}
     <div className={`${c.cart__sidebar} ${cartOpen ? c.active_sidebar : ""}`}>
        {cartOpen && <FiX onClick={() => setCartOpen(false )} className={c.close__sidebar}/>}
        <div className={c.cart__container}>
          <Cart setCartOpen={setCartOpen}/>
        </div>
      </div>
    </>
  )
}

export default Navbar;