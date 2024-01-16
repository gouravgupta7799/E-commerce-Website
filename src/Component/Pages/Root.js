import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CartProvider from '../ContextStore/CartProvider';
import Headline from '../Layout/Headline';


const RootLayout = () => {
  return (
    <CartProvider>
      <Header />
      <Headline/>
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default RootLayout;