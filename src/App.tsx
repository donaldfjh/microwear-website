import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { ComparisonProvider } from "./contexts/ComparisonContext";
import { Navigation, ErrorBoundary } from "./components";
import {
  HomePage,
  ProductCatalogPage,
  ProductDetailPage,
  ComparisonPage,
  ContactPage,
  AboutPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ProductProvider>
          <ComparisonProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductCatalogPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </ComparisonProvider>
        </ProductProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
