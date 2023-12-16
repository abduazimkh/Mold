import React from "react";
import Product from "../product/Product";
import c from "./ProductCatalog.module.css";
import NavbarSidebar from "../navbar-sidebar/NavbarSidebar";

const ProductCatalog = ({ title, data }) => {
  const customStyle = {
    position: "relative",
    top: "-95px",
    left: "15px",
  };



  return (
    <div className={c.catalog__wrapper}>
      <div className={c.category__menu}>
        <NavbarSidebar
          customStyle={window.innerWidth <= 990 ? customStyle : null}
        />
      </div>
      <div>
        <h1 className={c.catalog__title}>{title}</h1>

        <div className={c.product__catalog}>
          <div className={c.wrapper_catalog} >
            {data?.map((product, index) => (
              <div key={index} className={c.product__catalogItem}>
                <Product productData={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
