/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Product } from "../types/product";
import productsData from "../data/products.json";
import { searchProducts as searchProductsUtil } from "../utils/search";
import {
  filterProducts as filterProductsUtil,
  type ProductFilters,
} from "../utils/filters";

interface ProductContextType {
  products: Product[];
  loading: boolean;
  getProductById: (id: string) => Product | undefined;
  searchProducts: (query: string) => Product[];
  filterProducts: (filters: ProductFilters) => Product[];
}

export type { ProductFilters };

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading delay for data fetching
    const loadProducts = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 100));
      setProducts(productsData as Product[]);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const getProductById = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  const searchProducts = (query: string): Product[] => {
    return searchProductsUtil(products, query);
  };

  const filterProducts = (filters: ProductFilters): Product[] => {
    return filterProductsUtil(products, filters);
  };

  const value: ProductContextType = {
    products,
    loading,
    getProductById,
    searchProducts,
    filterProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
