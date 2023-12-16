function nestCategories (allproducts){
  const allproducts_maincategoriesuz = [...new Set(allproducts.mainCategory_uz)].map(categoryItem => {
    categoryItem = {
      value: categoryItem.toLowerCase(),
      label: categoryItem.charAt(0).toUpperCase() + categoryItem.slice(1)
    }
    return categoryItem
  });
  const allproducts_maincategoriesru = [...new Set(allproducts.mainCategory_ru)].map(categoryItem => {
    categoryItem = {
      value: categoryItem.toLowerCase(),
      label: categoryItem.charAt(0).toUpperCase() + categoryItem.slice(1)
    }
    return categoryItem
  });;
  const allproducts_subcategoriesuz = [...new Set(allproducts.productSubCategories_uz)].map(categoryItem => {
   let c = categoryItem.map(i => {
      i = {
        value: i.toLowerCase(),
        label: i.charAt(0).toUpperCase() + i.slice(1)
      }
      return i
    })
    return c
  });;
  const allproducts_subcategoriesru = [...new Set(allproducts.productSubCategories_ru)].map(categoryItem => {
    let c = categoryItem.map(i => {
      i = {
        value: i.toLowerCase(),
        label: i.charAt(0).toUpperCase() + i.slice(1)
      }
      return i
    })
    return c
  });
  return {
      main_categories_uz: allproducts_maincategoriesuz,
      main_categories_ru: allproducts_maincategoriesru,
      sub_categories_uz: allproducts_subcategoriesuz,
      sub_categories_ru: allproducts_subcategoriesru
  }
}

export default nestCategories