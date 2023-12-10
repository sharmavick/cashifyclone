import React from "react";
import { useState, useEffect } from "react";
function Banner() {
  const images = [
    "https://s3n.cashify.in/estore/23f42e4a660a451b95d5cad6e0afdf89.webp",
    "https://s3n.cashify.in/estore/aacd7c22bd434ad196de31ef9f9216f8.webp",
    "https://s3n.cashify.in/estore/747c1f7e59584da8aa1cccf85d56e682.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto play: Move to the next image every 3 seconds
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
    <div className="product-sec w-full m-auto mt-5">
      <div className="min-w-0 flex flex-wrap sm:flex md:flex-wrap content-start basis-full sm:basis-full md:basis-full">
        <div className="min-w-0 block sm:block md:m-auto basis-full sm:basis-full md:basis-full">
          <div className="relative sm:h-96 sm:pb-5">
            <div className="h-44 py-0 sm:p-0 sm:w-full sm:h-full mb-3 mt-5 sm:mt-0 sm:mb-0 relative">
            <div className="">
          {/* Carousel wrapper */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform transform ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50 focus:outline-none"
            onClick={handlePrev}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6 text-black dark:text-white rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50 focus:outline-none"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6 text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Banner;
