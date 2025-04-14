import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { CartProvider } from "./context/CartProvider";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <CartProvider>
        <ProductsProvider>
          <Header viewCart={viewCart} setViewCart={setViewCart} />
          {pageContent}
          <Footer viewCart={viewCart} />
        </ProductsProvider>
      </CartProvider>
    </>
  );

  return content;
}

export default App;
