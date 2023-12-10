import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
function Navbar() {
  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      const navbar = document.getElementById('navbar'); // Replace 'navbar' with the actual ID of your navbar

      // Check if the page has been scrolled down
      if (window.scrollY > 0) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="max-w-screen-xl w-full px-4 flex h-16 ">
          <div  id="navbar" className="flex  items-center justify-center w-full sm:py-3 gap-4 relative">
            <div className="brand-search flex-1 flex items-center my-0">
              <div className="brand flex cursor-pointer">
                <a href="#">
                  <div className="w-24 h-6 sm:w-40 sm:h-9">
                  <img
                  className="h-6 sm:h-10 w-20 sm:w-32"
                  src="https://s3.cashify.in/imageLibrary/57f7843958b70-logo_cashify.png"
                />
                  </div>
                </a>
              </div>
              {/* search-bar */}
              <div className=" search-container  w-full relative shadow-small">
                <div>
                  <div className="w-full text-primary-text flex items-center gap-3 rounded-lg flex-row py-3 px-2 bg-surface-light st-current">
                    <CiSearch className="searchicon" width="24" />
                    <div className="relative w-full">
                      <input
                        type="text"
                        class="basis-full border-none bg-transparent focus:outline-none focus:ring-0 w-full p-0 body2"
                        id="Global search Container"
                        autocomplete="off"
                        placeholder="Search for mobiles, accessories &amp; More"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* location-btn */}
            <div className="location-btn flex items-center justify-end">
              <div className="flex flex-row justify-between">
                <div className="location flex flex-row items-center justify-center cursor-pointer text-primary-text ">
                  <FaLocationDot />
                  <span className="web-text">Jabalpur</span>
                  <FaAngleDown className="w-4" />
                </div>
                <div className="login-btn hidden sm:block">
                  <span className="body3 flex flex-row text-primary-text items-center justify-center ps-5 ml-1 cursor-pointer">
                    <button className=" btn  items-center cursor-pointer border-none bg-cta/90 text-cta-contrast-text hover:bg-cta text-md transition-colors duration-200 inline-flex justify-center rounded-md  font-medium py-1.5 px-4 w-28 h-9">
                      <span className="web-text">Login</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            {/* location-btn-end */}
          </div>
        </div>
        <hr className="border-surface-border border-b border-t-0 border-solid w-full  my-0 sm:my-0"></hr>
        {/* drop -down section */}
        <div className="min-w-0 hidden sm:block basis-0 sm:basis-full md:basis-full z-10">
          <div className="hidden sm:flex flex-col items-center bg-primary-bg shadow-bottom1">
            <div className="flex flex-row w-full max-w-screen-xl justify-between px-4">
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">All</span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>

              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">Sell Phone</span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">
                        Sell Gadgets
                      </span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">Buy Phone</span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">
                        Find New Gadget
                      </span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">Buy Laptop</span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">
                        Cashify Store
                      </span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
              <div className="relative flex items-center cursor-pointer group/navigation">
                <span>
                  <span>
                    <div className="h-full flex items-center justify-center py-4 w-fit border-t-4 border-solid border-transparent text-primary-text transition-font duration-300  transition-border duration-800 ease-in-out hover:text-primary hover:border-primary-border hover:font-medium">
                      <span className="subtitle1 font-semibold drop-down-text">More</span>
                      <FaAngleDown className="w-4" />
                    </div>
                  </span>
                </span>
                {/* drop-down */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-surface-border border-b border-t-0 border-solid w-full  my-0 sm:my-0"></hr>
      </header>
    </>
  );
}

export default Navbar;
