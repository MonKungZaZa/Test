import { useProducts } from "../../hooks/setProduct";
import ProductCard from "./ProductCard";

const ProductList = ({ onViewDetail }) => {
    const { products, loading, error } = useProducts();

    if (loading) return <div className="loading"> กำลังโหลด  </div>
    if (error) return <div className="error">  เกิดข้อผิดพลาด </div>

    return (
        <div className="product-list">
            <h2>สินค้าทั้งหมด</h2>
            <div className="product-grid">
                {products.map(  p =>(
                    <ProductCard 
                    key={p.id}
                    product={p}
                    onViewDetail={onViewDetail}
                    />
                )     )}
            </div>
        </div>
    )
}

export default ProductList;