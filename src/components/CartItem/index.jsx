import './styles.sass';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';

export const CartItem = (props) => {
    const cartContext = useContext(CartContext);
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
                    <p>Precio: ${item.price}</p>
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
                  <button onClick={() => cartContext.removeItem(item.id)}>X</button>
                </div>
              </div>
            )
          }
        )
      }
}