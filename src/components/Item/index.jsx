import './styles.sass';
import { ItemCount } from "../ItemCount/index";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <div className="product-card">
            <Link to={`/item/${item.id}`}>
                <div className="product-img">
                    <img src={item.productimg} alt={item.name} />
                </div>
                <div className="product-info">
                    <h5 className="product-title">{item.name}</h5>
                    {/* <div className="product-price">
                        $<span className="price">{item.price}</span>
                    </div> */}
                    
                    {/* <ItemCount stockProducto = {item.stock}/>  */}

                    <button className="btn no-link see-product">
                        {/* <Link to={'/item-detail'}>Ver Detalle</Link> */}
                        Get yours
                    </button>
                </div>
            </Link>
        </div>
    )
}