import React, { useEffect, useMemo, useState } from 'react';
import ContentTitle from '../../components/content-title/ContentTitle';
import c from './Create.module.css';
import arrow from '../../assets/admin/create_btn.svg';
import uzbek from '../../assets/admin/uzbekistan.svg';
import russian from '../../assets/admin/russia.svg';
import camera from '../../assets/admin/camera.svg';
import check from '../../assets/admin/tick.svg';
import Creatable from 'react-select/creatable';
// eslint-disable-next-line  
import { FiEdit, FiTrash2, FiX } from 'react-icons/fi';
import authApiInstance from '../../api/private/private_api_instance';
import { toast } from "react-toastify";
import nestCategories from '../../helpers/nestCategories';
import { Loader } from '../../components/loader/Loader';
import { t } from "i18next";
import i18n from "../../components/language/i18next";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Create = () => {
  const statelang = useSelector(state => state.lang);
  const { state } = useLocation();
  const [editSizePriceAndQuantity, setEditSizeAndQuantity] = useState(); 
  const [editProductDescriptionUzIndx, setEditProductDescriptionUzIndx] = useState();
  const [editProductDescriptionRuIndx, setEditProductDescriptionRuIndx] = useState();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(false);
  const [categoryIdUz, setCategoryIdUz] = useState(-1);
  const [categoryIdRu, setCategoryIdRu] = useState(-1);
  const [productDescription, setProductDescription] = useState("");

  const [productName_uz, setProductName_uz] = useState(state?.productName_uz || "");
  const [productName_ru, setProductName_ru] = useState(state?.productName_ru || "");

  const [productDescription_uz, setProductDescription_uz] = useState(state?.productDescription_uz ||  []);
  const [productDescription_ru, setProductDescription_ru] = useState(state?.productDescription_ru ||  []);

  const [productCategory_uz, setProductCategory_uz] = useState("");
  const [productCategory_ru, setProductCategory_ru] = useState("");

  const [productSubCategory_uz, setProductSubCategory_uz] = useState("");
  const [productSubCategory_ru, setProductSubCategory_ru] = useState("");

  const [productPrice, setProductPrice] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productCount, setProductCount] = useState(0);

  const [productSizePriceAndQuantity, setProductSizePriceAndQuantity] = useState(state?.productSizesAndQuantity?.map(i => `${i.size} > ${i.price} > ${i.quantity}`) || []);
  const [productImages, setProductImages] = useState(state?.productImages || null);
  const [categoryList, setCategoryList] = useState(null);
  const handleCreateDescriptionCollection = () => {
    if (
      productDescription.length < 3 ||
      !productDescription.replace(/\s/g, "").length
    ) {
      toast.error(statelang.language === "uz" ? "Маҳсулот маълумотларида хатолик бор!" : "В информации о товаре ошибка!");
      return;
    }
    if(editProductDescriptionUzIndx >= 0){
      productDescription_uz.splice(editProductDescriptionUzIndx, 1, productDescription);
      setProductDescription_uz(productDescription_uz);
    }
    else if(editProductDescriptionRuIndx >= 0){
      productDescription_ru.splice(editProductDescriptionRuIndx, 1, productDescription);
      setProductDescription_ru(productDescription_ru);
    }
    else if (!language ) {
      setProductDescription_uz([...productDescription_uz, productDescription]);
    } else {
      setProductDescription_ru([...productDescription_ru, productDescription]);
    }
    setProductDescription("");
    setEditProductDescriptionUzIndx();
  };


  const handleProductPriceSizeAndQuantity = () => {
    if (productSize.length < 3 || productPrice.length < 3 || productCount < 1) {
      return toast.error(statelang.language === "uz" ? "Маҳсулот ўлчамида ва нархида хатолик" : "Ошибка в размере товара и цене");
    }
    if(editSizePriceAndQuantity >= 0){
      productSizePriceAndQuantity.splice(editSizePriceAndQuantity, 1, `${productSize} > ${productPrice} > ${productCount}`);
      setProductSizePriceAndQuantity(productSizePriceAndQuantity);
      
    }
    else{
      setProductSizePriceAndQuantity([
        ...productSizePriceAndQuantity,
        `${productSize} > ${productPrice} > ${productCount}`,
      ]);
    }

    
    setProductSize("");
    setProductPrice("");
    setProductCount(0);
    setEditSizeAndQuantity(-1);
  };


  const deleteDescriptionItem = (deleteItemID) => {
    if (!language) {
      productDescription_uz.splice(deleteItemID, 1);
      setProductDescription_uz([...productDescription_uz]);
    } else {
      productDescription_ru.splice(deleteItemID, 1);
      setProductDescription_ru([...productDescription_ru]);
    }
  };

  const deletePriceQuantity = (deletePriceQuantityID) => {
    productSizePriceAndQuantity.splice(deletePriceQuantityID, 1);
    setProductSizePriceAndQuantity([...productSizePriceAndQuantity]);
  };

  function createImgaeURLs(productImages) {
    const imageURLs = [];
    if (productImages !== null) {
      for (let i = 0; i < productImages?.length; i++) {
        if( typeof productImages[i] === "object"){
          imageURLs.push(URL.createObjectURL(productImages[i]));
        }
        else{
          imageURLs.push(productImages[i])
        }
      }
      return imageURLs;
    }
  }

  const imageURLs = useMemo(
    () => createImgaeURLs(productImages),
    [productImages]
  );

  const removeAllSelectedImages = () => {
    while(imageURLs.at(0)){
      imageURLs.pop();
    }
    setProductImages(null);
  };


  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      minWidth: "250px",
      marginRight: "20px",
      height: "65px",
      fontSize: "20px",
      borderRadius: "10px",
      border: "2px solid #4361EE",
    }),
  };

  const getCategory = (selectedValue) => {
    if (!language) {
      setProductCategory_uz(selectedValue?.label);
    } else {
      setProductCategory_ru(selectedValue?.label);  
    }
    const index = categoryList.main_categories_uz.findIndex(i => i.value === selectedValue.value)
    const index2 = categoryList.main_categories_ru.findIndex(i => i.value === selectedValue.value)
    if(index !== -1){
      setCategoryIdUz(index)
    }
    else{
      setCategoryIdUz(-1);
    }
    if(index2 !== -1){
      setCategoryIdRu(index2)
    }
    else{
      setCategoryIdRu(-1)
    }
  };

  const getSubCategory = (selectedValue) => {
    if (!language) {
      setProductSubCategory_uz(selectedValue?.label);
    } else {
      setProductSubCategory_ru(selectedValue?.label);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    function loaddata(){
      authApiInstance
      .get("/category/category-nest", {signal: controller.signal})
      .then((response) => {
        setCategoryList(nestCategories(response.data))
      })
    }

    loaddata();

    return () => {
      controller.abort();
    }
  }, []);


  const handleCreateProduct = async (e) => {
    e.preventDefault();

    if(productName_uz.replace(/ /g, "").length < 1){
      return toast.error("Маҳсулот номи")
    }
    if(productName_ru.replace(/ /g, "").length < 1){
      return toast.error("Название продукта")
    }
    if(productDescription_uz.length < 1){
      return toast.error("Маҳсулот маълумотлари")
    }
    if(productDescription_ru.length < 1){
      return toast.error("Информация о продукте")
    }
    if(productSizePriceAndQuantity.length < 1 && language){
      return toast.error("Размеры продукта & цена товара")
    }
    if(productSizePriceAndQuantity.length < 1 && !language){
      return toast.error("Маҳсулот ўлчамлари & Маҳсулот нархи")
    }



    if (
      productDescription.length > 1 ||
      !productSizePriceAndQuantity.length ||
      productImages === null
    ) {
      return toast.error(statelang.language === "uz" ? "Барча маълумотларни тўғри киритинг!" : "Введите всю информацию правильно!");
    }
    else{


    let formdata = new FormData();
    formdata.append("productName_uz", productName_uz);
    formdata.append("productName_ru", productName_ru);
    formdata.append(
      "productDescription_uz",
      JSON.stringify(productDescription_uz)
    );
    formdata.append(
      "productDescription_ru",
      JSON.stringify(productDescription_ru)
    );
    for (let i = 0; i < productImages.length; i++) {
      formdata.append("productImages", productImages[i], productImages[i].name);
    }
    formdata.append("productSizesAndQuantity", productSizePriceAndQuantity);
    formdata.append("productMainCategory_uz", productCategory_uz);
    formdata.append("productMainCategory_ru", productCategory_ru);
    formdata.append("productSubCategory_uz", productSubCategory_uz || "all");
    formdata.append("productSubCategory_ru", productSubCategory_ru || "all");
    if (formdata) {
      setLoading(true);
      authApiInstance
        .post("/product/create-product", formdata)
        .then((result) => {
          if (result) {
            setLoading(false)
            toast.success(statelang.language === "uz" ? "Муваффақиятли яратилди!" : "Успешно создано!")
            setProductDescription([])
            setProductSizePriceAndQuantity([])
            setProductImages(null)
            setProductName_ru("")
            setProductName_uz("")
            setProductSize("")
            setProductPrice("")
            setProductCount(0)
          }
        })
        .catch((error) => {
          toast.error(statelang.language === "uz" ? "Маҳсулот яратишда хатолик!" : "Ошибка при создании продукта!")
          setLoading(false);
        });
    }
  }
  };

  const editSizeAndQuantity = (indx) => {
    setEditSizeAndQuantity(indx);
    const editableProperty = productSizePriceAndQuantity?.at(indx);
    setProductCount(+editableProperty.split(">")[2]);
    setProductPrice(editableProperty.split(">")[1]);
    setProductSize(editableProperty.split(">")[0]);
  }

  const editProductDescriptionUz = (indx) => {
    setEditProductDescriptionUzIndx(indx);
    setProductDescription(productDescription_uz?.at(indx))
  }

  const editProductDescriptionRu = (indx) => {
    setEditProductDescriptionRuIndx(indx);
    setProductDescription(productDescription_ru?.at(indx))
  }


  const handleProductUpdate = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("productName_uz", productName_uz);
    formdata.append("productName_ru", productName_ru);
    formdata.append(
      "productDescription_uz",
      JSON.stringify(productDescription_uz)
    );
    formdata.append(
      "productDescription_ru",
      JSON.stringify(productDescription_ru)
    );
    if(!Array.isArray(productImages)){
      for (let i = 0; i < productImages.length; i++) {
        formdata.append("productImages", productImages[i], productImages[i].name);
      }
    }
    else{
      formdata.append("productImages", productImages)
    }
    formdata.append("productSizesAndQuantity", productSizePriceAndQuantity);
    formdata.append("productMainCategory_uz", productCategory_uz);
    formdata.append("productMainCategory_ru", productCategory_ru);
    formdata.append("productSubCategory_uz", productSubCategory_uz);
    formdata.append("productSubCategory_ru", productSubCategory_ru);
    if (formdata) {
      setLoading(true);
      authApiInstance
        .put(`/product/update-product/${state?._id}`, formdata)
        .then((result) => {
          if (result) {
            setLoading(false)
            toast.success(statelang.language === "uz" ? "Муваффақиятли янгиланди!" : "Успешно обновлено!")
            setProductDescription([])
            setProductSizePriceAndQuantity([])
            setProductDescription_ru([])
            setProductDescription_uz([])
            setProductCategory_uz({label: '', value: ''})
            setProductCategory_ru({label: '', value: ''})
            setProductSubCategory_ru({label: '', value: ''})
            setProductSubCategory_uz({label: '', value: ''})
            setProductCategory_uz({})
            setProductImages(null)
            setProductName_ru("")
            setProductName_uz("")
            setProductSize("")
            setProductPrice("")
            setProductCount(0)
          }
        })
        .catch((error) => {
          toast.error(statelang.language === "uz" ? "Маҳсулот таҳрирлашда хатолик!" : "Ошибка редактирования продукта!")
          setLoading(false);
        });
    }
  }
  return (
    <div className={c.create}>
      <ContentTitle title={t("Create.Create_title")} />
      <div className={c.form__container}>
        <form className={c.create__form} onSubmit={state ? handleProductUpdate : handleCreateProduct}>
          {!language ? (
            <input
              className={c.form__input}
              type="text"
              placeholder={t("Create.placeholder1")}
              value={productName_uz}
              onChange={(e) => setProductName_uz(e.target.value)}
            />
          ) : (
            <input
              className={c.form__input}
              type="text"
              placeholder={t("Create.placeholder1")}
              value={productName_ru}
              onChange={(e) => setProductName_ru(e.target.value)}
            />
          )}
          {productName_uz?.replace(/ /g, "").length &&
          productName_uz?.replace(/ /g, "").length < 3 ? (
            <p className={c.instructor}>Name is invalid</p>
          ) : (
            <></>
          )}

          <div className={c.collector__container}>
            <input
              className={c.form__input}
              type="text"
              placeholder={t("Create.placeholder2")}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <button className={c.collector__button} type="button">
              <img
                src={arrow}
                alt=""
                onClick={handleCreateDescriptionCollection}
              />
            </button>
          </div>
          {productDescription_uz?.length > 0 ||
          productDescription_ru?.length > 0 ? (
            <div className={c.input__previews}>
              {!language
                ? productDescription_uz?.map((description__item, index) => (
                    <div key={index} className={c.product__descriptionitem}>
                      {description__item}{" "}
                      {state && <FiEdit onClick={() => editProductDescriptionUz(index)}/>}
                      <FiX onClick={() => deleteDescriptionItem(index)} />
                    </div>
                  ))
                : productDescription_ru?.map((description__item, index) => (
                    <div key={index} className={c.product__descriptionitem}>
                      {description__item}{" "}
                      {state && <FiEdit onClick={() => editProductDescriptionRu(index)}/>}
                      <FiX onClick={() => deleteDescriptionItem(index)} />{" "}
                    </div>
                  ))}
            </div>
          ) : (
            <></>
          )}
          <div className={c.product__counter}>
            <input
              className={c.form__input}
              type="text"
              placeholder={t("Create.placeholder3")}
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
            />
            <input
              className={c.form__input}
              type="text"
              placeholder={t("Create.placeholder4")}
              value={productPrice ? Number(productPrice).brm() : productPrice}
              onChange={(e) => setProductPrice(e.target.value.replace(/\D/gi, "").split(" ").join(""))}
            />
            <div className={c.counter__container}>
              <button
                type="button"
                onClick={() => {
                  productCount > 0
                    ? setProductCount((productCount) => productCount - 1)
                    : setProductCount(0);
                }}
              >
                -
              </button>
              <input 
                onChange={e=>setProductCount(Number(e.target.value))}
                value={productCount} 
                type="number"
                style={productCount.toString().length > 3? 
                  {width:"150px"}
                  :
                  {width:"100px"}
                } />
              <button
                type="button"
                onClick={() => {
                  setProductCount((productCount) => productCount + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className={c.collector__button}
              type="button"
              onClick={handleProductPriceSizeAndQuantity}
            >
              <img src={arrow} alt="" />{" "}
            </button>
          </div>
          {productSizePriceAndQuantity.length > 0 && (
            <div className={c.input__previews}>
              { productSizePriceAndQuantity?.map(
                (pricequaantity__item, index) => (
                  <div key={index} className={c.product__descriptionitem}>
                    {pricequaantity__item}{" "}
                   {state && <FiEdit onClick={() => editSizeAndQuantity(index)}/>}
                    <FiX onClick={() => deletePriceQuantity(index)} />
                  </div>
                )
              ) }

            </div>
          )}
          {productSize.length && !/[a-zA-Z\-0-9]/.test(productSize) ? (
            <p className={c.instructor}>Size is invalid</p>
          ) : (
            <></>
          )}
          {productPrice.length && /[a-zA-Z]/.test(productPrice) ? (
            <p className={c.instructor}>Price is invalid</p>
          ) : (
            <></>
          )}
          {
            <div className={c.form__select}>
              <Creatable
                onChange={getCategory}
                placeholder={<div>{t("Create.placeholder5")}</div>}
                styles={colourStyles}
                defaultValue={language === "uz" ? { label: state?.productMainCategory_uz, value: state?.productMainCategory_uz } : { label: state?.productMainCategory_ru, value: state?.productMainCategory_ru } }
                options={
                  !language
                    ? categoryList?.main_categories_uz
                    : categoryList?.main_categories_ru
                }
              />
              <Creatable
                onChange={getSubCategory}
                
                placeholder={<div>{t("Create.placeholder6")}</div>}
                styles={colourStyles}
                defaultValue={language === "uz" ? { label: state?.productSubCategory_uz, value: state?.productSubCategory_uz } : { label: state?.productSubCategory_ru, value: state?.productSubCategory_ru } }
                options={
                  !language
                    ? categoryList?.sub_categories_uz[categoryIdUz]
                    : categoryList?.sub_categories_ru[categoryIdRu]
                }
              />
            </div>
          }
          <div className={c.image__view}>
            <div className={c.photo__button}>
              <input
                onChange={(e) => setProductImages(e.target.files)}
                type="file"
                className={c.photo__input}
                accept="image/.jpeg, .png, .jpg"
                multiple={true}
              />
              <img src={camera} alt="" />
            </div>
            <div className={c.photo__preview}>
              { imageURLs?.map((preview__image, index) => (
                <div key={index} className={c.preview__image}>
                  <img src={preview__image} alt="" />
                </div>
              ))
              }
            </div>
            {imageURLs?.length > 0 || state?.productImages?.length ? (
              <FiTrash2
                className={c.remove__images}
                onClick={removeAllSelectedImages}
              />
            ) : <></>}
          </div>
          {!state  ? <button style={loading ? {opacity: 0.7} : {opacity: 1}} disabled={loading} type="submit" className={c.submit__button}>
                      {!loading ? <> <img src={check} alt="" />{t("Create.create_btn")}</> : <Loader/>}
                    </button>
              :  
              <button style={loading ? {opacity: 0.7} : {opacity: 1}} disabled={loading} type="submit" className={c.update__button}>
                {!loading ? <> <FiEdit/> {t("Create.update_btn")}</> : <Loader/>}
              </button>
        }
        </form>
        <div className={c.form__langugae}>
          <div
            className={
              !language
                ? `${c.lang__changer} ${c.activelang}`
                : `${c.lang__changer}`
            }
            onClick={() => {
              setLanguage(false)
              i18n.changeLanguage("uz")
              
            }}
          >
            <img src={uzbek} alt="" /> <p>Ўзбек</p>{" "}
          </div>
          <div
            className={
              language
                ? `${c.lang__changer} ${c.activelang}`
                : `${c.lang__changer}`
            }
            onClick={() => {
              setLanguage(true)
              i18n.changeLanguage("ru")
            }}
          >
            <img src={russian} alt="" /> <p>Русский</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create