import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef, useState, useEffect } from "react"; // Assuming you have the react-icons library installed
function Store() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft +=
        scrollContainerRef.current.clientWidth;
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -=
        scrollContainerRef.current.clientWidth;
    }
  };
  // pincode
  const [pincode, setPincode] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://api.postalpincode.in/pincode/{PINCODE}
        `);

        const data = await response.json();

        setIsValid(data.valid);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data when pincode changes
    fetchData();
  }, [pincode]);

  // habdler
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  // pincode dropdown
  // Sample data for states, districts, and branches
  const states = ["State 1", "State 2", "State 3"];
  const districts = ["District 1", "District 2", "District 3"];
  const branches = ["Branch 1", "Branch 2", "Branch 3"];

  // State to keep track of selected values
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  // condition rendering state
  // State to manage the visibility of additional content
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleArrowClick = () => {
    // Perform any actions you want when the arrow icon is clicked
    // In this example, we're toggling the visibility of additional content
    setShowAdditionalContent(!showAdditionalContent);
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
          <div className="grid grid-cols-2 gap-4 relative w-full m-auto pincode-input sm:w-80 pt-2 sm:pt-7 px-2.5 sm:ps-4">
            <div className=" w-full bg-white rounded-md py-1.5 px-2 shadow-small pin-input col-span-6">
              <div className="flex items-center relative px-0 py-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  className="peer p-0 block w-full outline-none ring-0 focus:outline-none focus:ring-0 bg-transparent border-none placeholder:text-surface-text/70"
                />
                <FaArrowCircleRight onClick={handleArrowClick} />
              </div>
            </div>
            {showAdditionalContent && (
              <div className="flex col-span-6 ">
                <div className="mr-4">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-600"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="mt-1 block w-32 px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mr-4">
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-gray-600"
                  >
                    District
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="mt-1 block w-32 px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="branch"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="mt-1 block w-32 px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">Select Branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
          {/* store card */}
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

      {/* pincode dropdown */}
    </>
  );
}

export default Store;
