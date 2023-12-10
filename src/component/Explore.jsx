import React, { useState } from "react";

function Explore() {
  const [activeButton, setActiveButton] = useState("phone");

  const renderCards = () => {
    switch (activeButton) {
      case "phone":
        return renderPhoneCards();
      case "laptop":
        return renderLaptopCards();
      case "smartwatch":
        return renderSmartwatchCards();
      default:
        return null;
    }
  };

  const renderPhoneCards = () => {
    // Replace this with the actual rendering logic for phone cards
   
    return (
      <div>
        <h2>Phone Cards</h2>
        {/* Render phone cards here */}
      </div>
    );
  };

  const renderLaptopCards = () => {
    // Replace this with the actual rendering logic for laptop cards
    return (
      <div>
        <h2>Laptop Cards</h2>
        {/* Render laptop cards here */}
      </div>
    );
  };

  const renderSmartwatchCards = () => {
    // Replace this with the actual rendering logic for smartwatch cards
    return (
      <div>
        <h2>Smartwatch Cards</h2>
        {/* Render smartwatch cards here */}
      </div>
    );
  };

  return (
    <div className="relative product-sec w-full m-auto mt-15 explore">
      <div className="flex space-x-4">
        <div className="flex flex-col gap-1 relative cursor-pointer items-center px-6 py-2 sm:w-48">
          <h3
            className={`${
              activeButton === "phone"
                ? "text-blue-500 underline"
                : "text-gray-700"
            } px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring focus:border-blue-300`}
            onClick={() => setActiveButton("phone")}
          >
            Phone
          </h3>
        </div>
        <div className="flex flex-col gap-1 relative cursor-pointer items-center px-6 py-2 sm:w-48">
          <h3
            className={`${
              activeButton === "laptop"
                ? "text-blue-500 underline"
                : "text-gray-700"
            } px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring focus:border-blue-300`}
            onClick={() => setActiveButton("laptop")}
          >
            Laptop
          </h3>
          <div className="absolute h-1 w-full -bottom-0.5 left-0 bg-cta rounded"></div>
        </div>
        <div className="flex flex-col gap-1 relative cursor-pointer items-center px-6 py-2 sm:w-48">
          <h3
            className={`${
              activeButton === "smartwatch"
                ? "text-blue-500 underline"
                : "text-gray-700"
            } px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring focus:border-blue-300`}
            onClick={() => setActiveButton("smartwatch")}
          >
            Smartwatch
          </h3>
        </div>
      </div>
      <hr className="border-surface-border border-b border-solid w-full my-0" />
      <div className="mt-4">{renderCards()}</div>
    </div>
  );
}

export default Explore;
