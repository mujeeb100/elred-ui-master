import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../assets/photon.jpg";

function Header() {
  return (
    <header className="bg-white">
      <div className=" flex justify-between items-center px-3 py-2">
        <div className="lg:pr-[12rem] pl-6">
          <Link to="/">
            <img
              src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
              width="50"
              height="50"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex-1 relative">
          <span className="absolute top-2 left-2">
            <FontAwesomeIcon icon={["fas", "search"]} size="lg" color="gray" />
          </span>
          <input
            className="placeholder-black placeholder lg:w-[30rem] border-none outline-none bg-gray-100 py-2 px-10 rounded"
            type="text"
            placeholder="Search..."
          />
        </div>
        <button className="bg-black rounded text-white shadow-md mr-2 px-5 py-1 flex items-center">
          <span className="mr-4">
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="lg" />
          </span>
          <span className="text-xs">Checkout (200)</span>
        </button>
        <button>
          <div className="flex items-center gap-2 ml-12">
            <img
              width="30"
              height="30"
              src={user}
              alt="logo"
              className="rounded-full"
            />
            <span>user admin</span>
            <span className="mr-1">
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
