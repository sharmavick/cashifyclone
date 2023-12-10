import React from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
function ProductCard({ product }) {
  const [visibleCards, setVisibleCards] = useState(4); // Number of initially visible cards

  const handleRightArrowClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
  };

  const handleLeftArrowClick = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards > 1 ? prevVisibleCards - 1 : 1
    );
  };
  return (
    <>
      <div className=" relative w-full m-auto product-sec">
        <div className="flex justify-between mb-2 sm:mb-4">
          <div className="left-btn absolute left-6 justify-center items-center cursor-pointer rounded-full shadow-small bg-primary-bg p-2.5">
            {visibleCards > 3 && (
              <FaArrowAltCircleLeft onClick={handleLeftArrowClick} />
            )}
          </div>
          <h2 className="ml-10 font font-semibold text-3xl">
            Buy Refurbished Phones
          </h2>
          <a className="cursor-pointer">
            {" "}
            <p className="view-all">view All</p>
          </a>
        </div>
        <div className="flex flex-wrap">
          {product.cards.map((item, idx) => (
            <div
              key={idx}
              className={`product-card relative m-10 flex flex-col max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ${
                idx >= visibleCards ? "hidden" : "visible"
              }`}
            >
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <span className="absolute top-0 left-0 mb-2.5 bg-info rounded-tl-lg z-10 rounded-br-lg flex justify-center py-1 sm:px-3 text-xxs sm:body2 st-current bg-amber-400 px-2 text-left text-sm font-medium text-black">
                  {item.price.discount}
                </span>
                <img
                  className="object-cover"
                  src={item.image}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-5 pb-5 ">
                <a href="#">
                  <h5 className="card-head">{item.title}</h5>
                </a>
                {/* rating */}
                <div className="flex items-center mt-2">
                  {/* ... (your rating SVGs) ... */}
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between gap-1">
                  <p>
                    <span className="text-xl font-bold text-slate-900">
                      $41,099
                    </span>
                    <span className="text-sm text-slate-900 line-through ml-3">
                      $699
                    </span>
                  </p>
                </div>
                <p className="save">save ₹3999</p>
                <a
                  href="#"
                  className="flex text-start items-start justify-center rounded-md bg-blue-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {/* ... (your SVG path) ... */}
                  </svg>
                  Black Friday sale
                </a>
              </div>
            </div>
          ))}
          <div className=" right-btn absolute right-6 justify-center items-center cursor-pointer rounded-full shadow-small bg-primary-bg p-2.5">
            {visibleCards < product.cards.length && (
              <FaArrowCircleRight onClick={handleRightArrowClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
