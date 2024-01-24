import React, { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScrollPercentage = () => {
    // const scrollPercentage = Math.round(
    //   (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    // );
    // console.log(scrollPercentage);

    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

     setScrollPercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Something went wrong...</h1>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      <div className="scrollIndicator">
        <div
          className="scrollIndicator-progress"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
