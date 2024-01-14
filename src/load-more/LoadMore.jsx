import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function LoadMore({ limit = 20 }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${count * limit}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  // becuase useEffect was rendering products twice initially
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      fetchProducts();
    }
  }, [count]);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Something went wrong...</h1>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="load-more-container">
      <div className="products-container">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            );
          })}
      </div>
      <button disabled={(count+1)*limit==100} onClick={() => setCount(count + 1)}>Load More Products</button>
    </div>
  );
}

export default LoadMore;
