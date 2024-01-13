import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, page = 5, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        console.log(data);
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url, page, limit]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="image-slider">
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {images.map((image, index) => (
          <img
            key={index}
            className={`${index === currentSlide ? "" : "hide"}`}
            src={image.download_url}
            target="_blank"
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <div className="slides-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`circle-indicator ${
                index === currentSlide ? "active-slide" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
