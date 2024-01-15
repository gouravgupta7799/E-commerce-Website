
import './App.css';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import Products from './Component/Products/Products'
import CartProvider from './Component/ContextStore/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Products />
        <Footer />
      </CartProvider>
    </div >
  );
}

export default App;
