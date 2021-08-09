import './styles.sass';
import { useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context';

export function Cart() {
  const cartContext = useContext(CartContext); //Context (Estado Global y métodos globales) del Carrito
  const [cartQty, setCartQty] = useState(0)

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');

  useEffect(() => {
    setCartQty(cartContext.getTotalQty())
  }, [cartContext.cart])

  if (cartQty > 0) {
    return (
      <>   
        <div className="cart-container">
            <h1>Your Purchase</h1>
            <button class="btn secondary btn-empty-cart" onClick={cartContext.clear}>Empty cart</button>
            <div className="square-dots"><img src="/img/dots-sqare.svg" alt="" /></div>
          <div className="cart-content">

            {/* <div className="cart__header">
              <div className="col-product">Product</div>
              <div className="col-cantidad">Quantity</div>
              <div className="col-precio">Price</div>
              <div className="col-acciones"><button onClick={cartContext.clear}>Vaciar carrito</button></div>
            </div> */}
      
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
                          <p>${item.price}</p>
                        </div>
                      </div>
      
                      <div className="cart__item__cantidad">
                        <p>
                          {quantity}
                        </p>
                      </div>
      
                      <div className="cart__item__precio">
                        <p>
                          ${item.price * quantity}
                        </p>
                      </div>
      
                      <div className="cart__item__accion">
                        <button onClick={() => cartContext.removeItem(item.id)}>
                          <img src="/img/icon-trash.svg" alt="Remove from cart" />
                        </button>
                      </div>
                    </div>
                  )
                }
              )
            }
            </div>
            
            <div className="cart__footer">
              <button className="btn secondary">
                  <Link to={'/'}>Add more products</Link>
              </button>

              <div className="cart-total"><span>Total:</span> {cartContext.getSubTotalPrice()}</div>
            </div>
          </div>
          
        </div>

        <div className="checkout-container">
          <div className="bg-checkout">
            <img src="/img/bg-checkout.png" alt="" />
          </div>
            <h3>Your Information</h3>
            <p>Please fill the following form to complete your purchase.</p>
            <div className="form">
              <label htmlFor="Name">Name</label>
              <input type="text" placeholder="First name + Last name" onInput={(e) => {setName(e.target.value)}} />
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="xxxxx@xxxx.xxx" onInput={(e) => {setEmail(e.target.value)}} />
              <label htmlFor="Phone">Phone</label>
              <input type="tel" placeholder="+xxx xxx xxx" onInput={(e) => {setPhone(e.target.value)}} />
            </div>

            <button className="btn" onClick={() => { cartContext.createOrder(name, phone, email) }}>Checkout</button>

          </div>

        
      </>
    )
  }
  else {
    return (
    
      <div className="cart-container">
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="btn add-cart">
              <Link to={'/'}>Back to store</Link>
          </button>
        </div>
      </div>
         
    )
  }

  
}
