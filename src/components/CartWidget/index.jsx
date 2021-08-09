import './styles.sass';
import { useState, useEffect, useContext } from "react";
import { CartContext } from '../../context';
import { Link } from 'react-router-dom';

export const CartWidget = (props) => {
  const cartContext = useContext(CartContext);
  const [cartQty, setCartQty] = useState(0)

  useEffect(() => {
    setCartQty(cartContext.getTotalQty())
  }, [cartContext.cart])

  if (cartQty > 0) {
    return (
      <div className="cart-widget">
        <Link className="cart-icon" to="/cart">
          <img src="/img/icon_cart.svg" alt="Products in cart" />
          <span>{cartQty}</span>
        </Link >

      
        <div className="minicart">
    
          <div className="cart__list">
            {
            cartContext.cart.map(
              ({ item, quantity }) => {
                return (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__item__producto">
                      <div className="cart__item__img">
                        <img src={item.productimg} alt={item.name} />
                      </div>
                      <div className="cart__item__info">
                        <h2>
                          {item.name}
                        </h2>
                        <p>
                          Quantity: {quantity}
                        </p>
      
                        <p className="price">
                          <strong>${item.price * quantity}</strong>
                        </p>
                      </div>
                    </div>
    
                    <button onClick={() => cartContext.removeItem(item.id)}>X</button>
                  </div>
                )
              }
            )
          }
          </div>
          
          
          <div className="cart__footer">
            <button className="btn">
                <Link to={'/cart'}>View Cart</Link>
            </button>
          </div>
        </div>  
      </div>
          
  )
  } else {
    return (
      <div className="cart-widget">
        <Link className="cart-icon" to="/cart">
          <img src="/img/icon_cart.svg" alt="Products in cart" />
          <span>{cartQty}</span>
        </Link >
      </div>
      
    )
  }

  
}