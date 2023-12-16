import { useEffect, useState } from 'react';
import unAuthApiInstance from '../../api/public/public_api_instance';

const useFetchSingleProduct = (PRODUCT_ID) => {
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadSingleProduct = () => {
      setIsLoading(true);
      unAuthApiInstance.get(`/product/single-product/${PRODUCT_ID}`)
        .then(response =>{
           setProduct(response.data?.singleProduct);
           setIsLoading(false);
          })
        .catch(error => {
          setError(true);
          setMessage(error.response?.data?.message)
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }

    loadSingleProduct();

    return () => loadSingleProduct();
  }, [PRODUCT_ID])

  return { product, error, isLoading, message };
}

export default useFetchSingleProduct
