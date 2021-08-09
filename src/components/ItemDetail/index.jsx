import './styles.sass';
import { ItemCount } from "../ItemCount/index";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context';


export const ItemDetail = ({ item }) => {
  
  const initial = 1;
  const cartContext = useContext(CartContext); //Context (Estado Global y métodos globales) del Carrito
  const stockInCart = cartContext.getItemQty(item.id); // Cantidad agregada del item en el carrito
  const [itemsQ, setItemsQ] = useState(initial); // items seleccionados antes de enviar al carrito
  const [maxStock, setMaxStock] = useState(item.stock - stockInCart ); //stock máximo y se le restan la cantidad ya agregada al carrito
  const availableStock = maxStock - itemsQ ; // stock disponible, stock máximo menos la cantidad actual seleccionada

  const onAdd = () => {
    if (itemsQ >= maxStock) {
      return;
    } else {
      setItemsQ(itemsQ + 1);
    }
  };

  const onSubtract = () => {
    if (itemsQ <= initial) {
      return;
    } else {
      setItemsQ(itemsQ - 1);
    }
  };

  const [viewCart, setviewCart] = useState(false);
  const handleClick = () => setviewCart('show');

  const onAddToCart = () => {
    cartContext.addItem(item, itemsQ);
    setMaxStock(maxStock - itemsQ);
    setItemsQ(0);

    handleClick();
  };

  

  return (
    <>
    <div className="item-detail-container">
      <div className="product-img">
        <img src={item.productimg} alt={item.name} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{item.name}</h1>
        <div className="product-description">
          <p>{item.description}</p>
        </div>

        <div className="product-price">
          $<span className="price">{item.price}</span>
        </div>
        
        <ItemCount min={initial} max={maxStock} value={itemsQ} onAdd={onAdd} onSubstract={onSubtract} />
        <button className="btn add-cart" onClick={onAddToCart}>
          Add to cart
        </button>
        <div className="stock">
          Stock: {availableStock}
        </div>
        <div className={viewCart ? "show" : "hide"}>
          <button className="view-cart">
            <Link to={'/cart'}>View cart</Link>
          </button>
        </div>
        
      </div>
    </div>

      {/* <div className="product-hero">
        <img src={item.producthero} alt={item.name} />
      </div> */}


    <div className="product-qualities">
      <div className="quality">
        <div className="quality-icon">
          <img src={item.quality01icon} alt={item.quality01name} />
        </div>
        <h5 className="quality-name">{item.quality01name}</h5>
        <p className="quality-desc">{item.quality01desc}</p>
      </div>
      <div className="quality">
      <div className="quality-icon">
          <img src={item.quality02icon} alt={item.quality02name} />
        </div>
        <h5 className="quality-name">{item.quality02name}</h5>
        <p className="quality-desc">{item.quality02desc}</p>
      </div>
      <div className="quality">
      <div className="quality-icon">
          <img src={item.quality03icon} alt={item.quality03name} />
        </div>
        <h5 className="quality-name">{item.quality03name}</h5>
        <p className="quality-desc">{item.quality03desc}</p>
      </div>
      <div className="quality">
      <div className="quality-icon">
          <img src={item.quality04icon} alt={item.quality04name} />
        </div>
        <h5 className="quality-name">{item.quality04name}</h5>
        <p className="quality-desc">{item.quality04desc}</p>
      </div>
    </div>
    </>
  )
}