
import './App.css';
import About from './Component/Pages/About/About'
import ContactUS from './Component/Pages/ContactUS/ContactUS';
import Home from './Component/Pages/Home/Home'
import Products from './Component/Pages/Products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './Component/Pages/Products/SingleProduct'
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import CartProvider from './Component/ContextStore/CartProvider';
import Headline from './Component/Layout/Headline';
import { useContext } from 'react';
import AuthContext from './Component/ContextStore/Auth-Context';
import Login from './Component/LoginForm/Login'

function App() {

  const AuthCtx = useContext(AuthContext);
  const Auth = AuthCtx.isLoggedIn
  console.log(Auth)
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <Header />
          <Headline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/store' element={!Auth ? <Login /> : <Products />} />
            <Route path='/About' element={<About />} />
            <Route path='/singleproduct/:prodId' element={Auth && <SingleProduct />} />
            <Route path='/contact' element={<ContactUS />} />
            <Route path='*' element={<Login />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>

    </div >
  );
}

export default App;
