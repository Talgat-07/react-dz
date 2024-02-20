import "./App.sass";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import Cart from "./pages/Cart.tsx";
import Contacts from "./pages/Contacts.tsx";
import { ColorScheme, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import ProductDetails from "./pages/ProductDetails.tsx";

function App() {
  const [isTheme, setTheme] = useLocalStorage<string>({
    key: "Theme",
    defaultValue: "light",
  });

  const theme = () => {
    setTheme((e) => (e === "light" ? "dark" : "light"));
  };
  return (
    <MantineProvider
      theme={{
        colorScheme: isTheme as Partial<ColorScheme>,
        defaultRadius: "md",
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <Header isTheme={isTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </MantineProvider>
  );
}

export default App;
