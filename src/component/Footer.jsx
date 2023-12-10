import React from "react";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (
    <>
      <div className="  footer  ">
        <div class="grid grid-cols-6 gap-4 relative w-full m-auto product-sec mt-5">
          <div class="col-span-1 ">
            <div className=" flex flex-col">
              <img
                className=""
                src="https://s3.cashify.in/imageLibrary/57f7843958b70-logo_cashify.png"
              />
              <span className="font-bold text-gray-400">Follow us on</span>
              <div className="social-icon flex gap-4 mt-3">
                <FiYoutube />
                <FaInstagram />
                <CiFacebook />
                <CiTwitter />
              </div>
            </div>
          </div>
          <div class="col-span-1  mt-8">
            <p className="font-bold text-gray-400">Services</p>
            <ul className="mt-5 space-y-4 ">
              <li className="footer-li">sell phone</li>
              <li className="footer-li">sell Television</li>
              <li className="footer-li">sell Smart Watch</li>
              <li className="footer-li">sell Smart Speaker</li>
              <li className="footer-li">sell DSLR Camera</li>
              <li className="footer-li">Sell Earburd</li>
              <li className="footer-li">Sell Earburd</li>
              <li className="footer-li">Sell Earburd</li>
              <li className="footer-li">Sell Earburd</li>
            </ul>
          </div>
          <div class="col-span-1 mt-8 ">
            <p className="font-bold text-gray-400">Company</p>
            <ul className="mt-5 space-y-4 ">
             <a href="#"> <li className="footer-li">About Us</li></a>
             <li className="footer-li">Career</li>
              <li className="footer-li">Article</li>
              <li className="footer-li">Press Releases</li>
              <li className="footer-li">Become Cashify Partner</li>
              <li className="footer-li">Become Supersale partner</li>
            </ul>
          </div>
          <div class="col-span-1 mt-8 ">
            <p className="font-bold text-gray-400">Sell Device</p>
            <ul className="mt-5 space-y-4 ">
              <li className="footer-li">Mobile Phone</li>
              <li className="footer-li">Laptop</li>
              <li className="footer-li">Tablet</li>
              <li className="footer-li">iMac</li>
              <li className="footer-li">Gaming Console</li>
            </ul>
          </div>
          <div class="col-span-1 mt-8 ">
            <p className="font-bold text-gray-400">Help & Support</p>
            <ul className="mt-5 space-y-4 ">
              <li className="footer-li">FAQ</li>
              <li className="footer-li">Contact Us</li>
              <li className="footer-li">Warranty Policy</li>
              <li className="footer-li">Refund Policy</li>
              <li className="footer-li">sell DSLR Camera</li>
            </ul>
          </div>
          <div class="col-span-1 mt-8 ">
            <p className="font-bold text-gray-400">More Info</p>
            <ul className="mt-5 space-y-4 ">
              <li className="footer-li">sell phone</li>
              <li className="footer-li">sell Television</li>
              <li className="footer-li">sell Smart Watch</li>
              <li className="footer-li">sell Smart Speaker</li>
             
            </ul>
            <div className="hidden sm:block mt-5">
                <div className="p-2.5 bg-primary flex rounded-lg mb-7 sm:mb-0 w-fit cursor-pointer">
                    <div className="w-10 h-10">
                        <img src="https://s3n.cashify.in/imageLibrary/Group_1000004325_adde26f035a5.svg"/>
                    </div>
                    <div className="flex flex-col justify-between ml-2.5">
                        <p className="text-sm font-bold text-white">Chat With Us</p>
                        <p className="text-xs">Get question? just talk</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
