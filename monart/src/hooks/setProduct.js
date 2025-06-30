
import { useEffect, useState } from 'react'
import {api} from '../servics/api';

export const useProducts = () => {
    const [ products , setProducts ] = useState([]);
    const [ loading ,setLoading ] = useState(true);
    const [error , setError] = useState(null);
    useEffect(()=>{
        const featchProduct = async () => {
            try {
                setLoading(true);
                const data = await api.getProducts();
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        featchProduct();
    },[]);

    return {products , loading , error};

};