import { createContext, useEffect, useState } from "react";
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from "../firebase/client"

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    if (isInCart(item.id)) {
      const elementIndex = cart.findIndex(element => element.item.id == item.id);
      let cartCopy = [...cart];
      const cartItem = cart.find(element => element.item.id == item.id);
      cartItem.quantity += quantity;
      cartCopy[elementIndex] = cartItem;
      setCart(cartCopy);
    }
    else {
      setCart([...cart, { item, quantity: quantity }]);
    }
  }

  const removeItem = (itemId) => {
    setCart(arrayRemove(cart, itemId));
  }

  const clear = () => {
    setCart([]);
  }

  const getSubTotalPrice = () => {
    return (subTotalPrice()).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  const getTotalPrice = () => {
    return subTotalPrice().toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  const getTotalQty = () => {
    let qty = 0;
    cart.forEach(element => {
      let quantity = element.quantity;
      qty += quantity;
    });
    return qty;
  }

  const subTotalPrice = () => {
    let subTotal = 0;
    cart.forEach(element => {
      let pricePerQuantity = element.quantity * element.item.price;
      subTotal += pricePerQuantity;
    });
    return subTotal;
  }



  const isInCart = (itemId) => {
    let item = cart.find(element => element.item.id == itemId);
    if (!!item) {
      return true;
    }
    else {
      return false;
    }
  }

  const getItemQty = (itemId) => {
    let item = cart.find(element => element.item.id == itemId);
    if (!!item) {
      return item.quantity;
    }
    else {
      return 0;
    }
  }

  const arrayRemove = (arr, itemId) => {
    return arr.filter(function (ele) {
      if (ele.item.id != itemId)
        return ele;
    });
  }

  const createOrder = (name, phone, email) => {
    const order = { 
      buyer: 
        {name, phone, email}, 
        item: cart, 
        total: getSubTotalPrice(), 
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getFirestore();
    db.collection("Orders").add(order);

    setCart([]);

  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart, getItemQty, getTotalQty, getSubTotalPrice, getTotalPrice, createOrder }}>
      {children}
    </CartContext.Provider>
  )
}