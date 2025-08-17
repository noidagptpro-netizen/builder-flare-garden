import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} – ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
