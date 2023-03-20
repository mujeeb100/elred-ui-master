import React from "react";

function SideBar(props) {
  return (
    <div className="border bg-white">
      <div className="container p-5">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
            width="40"
            height="40"
          />
          <span className="font-semibold">A. T. Inks</span>
        </div>
        {props.children}
        <div className="shadow-gray-200 shadow-md border flex flex-col items-center px-6 py-3 mt-12">
          <div className="relative w-8 rounded-full bg-gray-200 p-1 text-center font-bold text-gray-50">
            <span className="absolute bottom-[1px] left-[2px] w-5 h-5 bg-gray-200"></span>
            <span className="relative z-[5]">?</span>
          </div>
          <p className="font-bold">Need help?</p>
          <p className="w-36 text-center py-4">
            Our support team is at your disposal.
          </p>
          <button className="bg-black rounded text-white shadow-md mr-2 px-5 py-1 flex items-center">
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
