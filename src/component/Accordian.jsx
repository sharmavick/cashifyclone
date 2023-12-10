import React from "react";
import { useState } from "react";
function Accordian() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };
  return (
    <>
      <div className="accord min-w-0 block sm:block md:m-auto basis-full sm:basis-full md:basis-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-5">
          <h2 className="ml-4 text-2xl font-bold">Frequenty Asked Questions</h2>
          <div className="flex mt-3 sm:mt-0">
            <div
              className={`accord-btn rounded-md px-5 py-2.5 cursor-pointer body3 bg-surface-bg font-semibold text-primary-text ${
                openAccordion === "accord1"
                  ? "bg-gray-300 border border-gray-500"
                  : ""
              }`}
              onClick={() => toggleAccordion("accord1")}
            >
              Sell Smart
            </div>
            <div
              className={`accord-btn rounded-md px-5 py-2.5 cursor-pointer body3 bg-surface-bg font-semibold text-primary-text ${
                openAccordion === "accord2"
                  ? "bg-gray-300 border border-gray-500"
                  : ""
              }`}
              onClick={() => toggleAccordion("accord2")}
            >
              Smart Buy
            </div>
            <div
              className={`accord-btn rounded-md px-5 py-2.5 cursor-pointer body3 bg-surface-bg font-semibold text-primary-text ${
                openAccordion === "accord3"
                  ? "bg-gray-300 border border-gray-500"
                  : ""
              }`}
              onClick={() => toggleAccordion("accord3")}
            >
              Repair/Other
            </div>
          </div>
        </div>
        {/*<!-- Component: Elevated accordion --> */}
        <section className="mb-7 sm:mb-12">
          <details className="group p-4"  open={openAccordion === "accord1"}>
            <summary
              className="relative cursor-pointer list-none pr-8 font-semibold text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden"
             
            >
              How do I know what comes next?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac13 desc-ac13"
              >
                <title id="title-ac13">Open icon</title>
                <desc id="desc-ac13">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Whenever the team is brewing something new, you will be able to
              find it, grayed out, on the main component page as well as the
              websites side navigation. The new component name will be there
              with a "coming next" badge.
            </p>
          </details>
          <details className="group p-4"  open={openAccordion === "accord2"}>
            <summary
              className="relative cursor-pointer font-semibold  list-none pr-8  text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden"
             
            >
              How To Sell Your Old Mobile Phone In 3 Steps?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac14 desc-ac14"
              >
                <title id="title-ac14">Open icon</title>
                <desc id="desc-ac14">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              You will always get notified about new components through our
              discord and other social accounts. You can also see the newest
              components on the main component page as well as the websites side
              navigation with a "new" badge next to their name.
            </p>
          </details>
          <details className="group p-4" open={openAccordion === 'accord3'}>
            <summary className="relative font-semibold  cursor-pointer list-none pr-8  text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden" >
              How can you sell old phone on Cashify?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac15 desc-ac15"
              >
                <title id="title-ac15">Open icon</title>
                <desc id="desc-ac15">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              All updated components will be accompanied by an "updated" badge.
              YOu will be able to see that on our main components page as well
              as our side navigation.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative font-semibold  cursor-pointer list-none pr-8  text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              What are the advantages of using Cashify to sell old phones
              online?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac16 desc-ac16"
              >
                <title id="title-ac16">Open icon</title>
                <desc id="desc-ac16">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              You will get notified by us about any major news or releases
              through our newsletter and our social accounts.
            </p>
          </details>
        </section>
        {/*<!-- End Elevated accordion --> */}
      </div>
    </>
  );
}

export default Accordian;
