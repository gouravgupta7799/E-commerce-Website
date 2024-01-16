import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CartProvider from '../ContextStore/CartProvider';


const RootLayout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default RootLayout;