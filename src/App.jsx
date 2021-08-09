import './App.css';
import './sass/styles.sass';
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HomeContent } from "./views/HomeContent";
import { CategoryPage } from "./views/CategoryPage";
import { ItemListContainer } from "./views/ItemListContainer";
import { ItemDetailContainer } from "./views/ItemDetailContainer";
import { CartWidget } from "./components/CartWidget";
import Cart from './views/Cart/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from './context';

function App() {
  const [listProducts, setListProducts] = useState([{ id: 1, name: 'libro', price: 150 }])
  return (
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <CartWidget />
          <Switch>
            <Route exact path="/" >
              <div className="home-container">
                <NavBar />
                <HomeContent />               
              </div>
            </Route>
            <Route path="/cart" >
              <NavBar />
              <Cart />
            </Route>
            <Route path="/category/:id" >
              <div className="category-container">
                <NavBar />
                <CategoryPage name=":id" /> 
              </div>
            </Route>
            <Route path="/item/:id" >
              <div className="product-detail-container">
                <NavBar />
                <ItemDetailContainer />
              </div>              
            </Route>
            <Route path="*" >
              <NavBar />
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
