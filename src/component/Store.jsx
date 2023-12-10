import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef, useState } from "react"; // Assuming you have the react-icons library installed
function Store() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth;
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth;
    }
  };
  return (
    <>
      <div className=" relative w-full m-auto product-sec mt-10">
        <div className="flex justify-between mb-2 sm:mb-4">
          <h2 className="ml-10 font font-semibold text-3xl">
            Our Exclusive Stores
          </h2>
          <a className="cursor-pointer">
            <p className="view-all">view all Store</p>
          </a>
        </div>
        <div className="flex gap-2 ml-9">
          <div className="flex items-center">
            <CiLocationOn className="icon-blue " />
            <p>170+ Experience Centres</p>
          </div>
          <div className="flex items-center">
            <CiStar className="icon-blue " />
            <p>4.5+ Star Ratings</p>
          </div>
        </div>
        {/* pincoder */}
        <div className="w-full bg-surface-light p-2 rounded-lg relative h-56 pincode-input">
          <div className="pincode-input relative w-full sm:w-80 pt-2 sm:pt-7 px-2.5 sm:ps-4">
            <div className="w-full bg-white rounded-md py-1.5 px-2 shadow-small pin-input">
              <div className="flex items-center relative px-0 py-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="peer p-0 block w-full outline-none ring-0 focus:outline-none focus:ring-0 bg-transparent border-none placeholder:text-surface-text/70"
                />
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
          <div className="flex items-center relative w-full">
            <div className="flex items-center overflow-x-scroll scrollbar-hide">
              <div
                className="flex space-x-2.5 sm:space-x-4 "
                ref={scrollContainerRef}
              >
                <div className="w-full h-52 rounded-lg relative p-4 min-w-full">
                  <div className="flex gap-2.5  relative">
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="flex text-secondary items-center cursor-pointer">
                            <span className="caption2 font-bold">
                              View Details
                            </span>
                            <FaArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="flex text-secondary items-center cursor-pointer">
                            <span className="caption2 font-bold">
                              View Details
                            </span>
                            <FaArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="flex text-secondary items-center cursor-pointer">
                            <span className="caption2 font-bold">
                              View Details
                            </span>
                            <FaArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="flex text-secondary items-center cursor-pointer">
                            <span className="caption2 font-bold">
                              View Details
                            </span>
                            <FaArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="flex text-secondary items-center cursor-pointer">
                            <span className="caption2 font-bold">
                              View Details
                            </span>
                            <FaArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="p-5 rounded-md text gap-y-2.5 flex flex-column bg-white w-80 flex-col shadow-small">
                      <span className="btn rounded-md text-white bg-primary p-2 w-fit uppercase">
                        Gurgaow
                      </span>
                      <h3 className="font-bold">Sec-14 Store</h3>
                      <div className="flex flex-col justify-between h-16">
                        <span className="pintext  text-surface overflow-hidden text-ellipsis line-clamp-2">
                          Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel
                          Bank market, Gurugram
                        </span>
                        <a>
                          <div className="absolute -right-6 hidden justify-center items-center cursor-pointer rounded-full shadow-small bg-primary-bg p-2.5 sm:flex">
                            <FaArrowRight onClick={scrollLeft} />
                          </div>
                          <div className="absolute -left-6 hidden justify-center items-center cursor-pointer rounded-full shadow-small bg-primary-bg p-2.5 sm:flex">
                            <FaArrowLeft onClick={scrollRight} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
