import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../servics/api'
import { Star , ShoppingCart} from 'lucide-react'

const ProductDetail = ( {onAddToCart} )=>{
    const {id} = useParams();
    const [ product , setProduct ] = useState(null)
    const [ loading , setLoading] = useState(true)
    const [selectedImage , setSelectedImage] = useState(0);

    useEffect( ()=> {
        const fetchProduct = async()=>{
            try {
                setLoading(true)
                const data = await api.getProduct(id);
                setProduct(data);
            } catch (error) {
                console.log('Error fetch product:' , error );
            } finally{
                setLoading(false)
            }
        }
        fetchProduct();
    }  , [id]  );

    if (loading) return <div className='loading'>   กำลังโหลด </div>
    if (!loading) return <div className='error'>   ไม่พบสินค้า </div>

    return(
        <div className='product-detail'>
            <div className='product-image'>
                <img src={product.images[selectedImage]}
                     alt={product.title}
                     className="main-image"
                />

            <div className='thumbnail-list'>
                {product.images.map( (image , index)=>(
                    <img
                        key={index}
                        src={image}
                        alt={ `${product.title} ${index + 1}`}
                        className= { `thumbnail ${index === selectedImage ? 'active' : '' }`}
                        onClick={ () => selectedImage(index)}
                    />
                ) )}
                </div>
            </div>

        <div className='product-info' >
            <h1> {product.title}   </h1>
            <div className='rating'>
                 <Star fill="gold" stoke="gold" />
                 <spam> {product.rating}    ({product.stock}ชิ้น)  </spam>
            </div>

            <p> {product.description}</p>
            <div>
                <span>  {product.price}  </span>
                <span>  {product.discountPercentage}    %OFF </span>
            </div>
            <button
                onClick={ ()=> onAddToCart(product)}>
                    <ShoppingCart size={20}/>
                    เพิ่มลงตระกร้า
                </button>


        </div>


    </div>
    )
}

export default ProductDetail;