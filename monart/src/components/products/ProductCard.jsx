
const ProductCard = ({ product, onViewDetail }) => {
    return (
        <div className="Product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />
            <div className="classproduct-info">
                <h3 className="product-title">  {product.title} </h3>
                <p className="product-price"> {product.price}</p>
                <p className="product-rating"> {product.rating}</p>
                <button onClick={() => onViewDetail(product.id)}>
                    ดูรายละเอียดสินค้า </button>
            </div>

        </div>
    )
}

export default ProductCard;