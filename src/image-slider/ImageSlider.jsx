import React, { useEffect, useState } from "react";

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
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url, page, limit]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>ImageSlider</div>
      {images.map((image, index) => (
        <p>
          <a href={image.download_url} target="_blank">{image.url}</a>
        </p>
      ))}
    </>
  );
}

export default ImageSlider;
