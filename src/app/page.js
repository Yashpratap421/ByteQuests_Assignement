'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar"
import Filter from "./components/filter"
import Products from "./components/products"

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <Filter/>
    <Products posts={products} />
    </>
  );
}
