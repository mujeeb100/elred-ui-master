import React, { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidePopup({ popupData, isOpen, updateCardData, closePopup }) {
  const { id, name } = popupData;
  const [translateClass, setTranslateClass] = useState("translate-x-[100%]");
  // const [showEdit, setShowEdit] = useState(() =>
  //   cardData.length ? false : true
  // );
  // const [toEdit, setToEdit] = useState({});

  useEffect(() => {
    if (isOpen) {
      setTranslateClass("translate-x-[0]");
    } else {
      setTranslateClass("translate-x-[100%]");
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed top-0 overflow-scroll right-0 h-full w-[30%] border ${translateClass} transition duration-1000 bg-white z-10`}
    >
      <div className="p-5 relative">
        <button
          className="absolute top-7"
          onClick={() => {
            if (showEdit) {
              setShowEdit(false);
              setToEdit({});
            } else closePopup();
          }}
        >
          <FontAwesomeIcon icon={["fas", "arrow-left"]} size="xl" />
        </button>
        {/* Social Media & links start */}
        <p className="text-3xl font-semibold ml-10">{name}</p>

        {/* Social Media & links end */}

        {id === "card-contact" && (
          <ContactPopup
            popupData={popupData}
            updateCardData={updateCardData}
            closePopup={closePopup}
          />
        )}
        {id === "card-address" && (
          <div>
            <div class="mt-6 py-2 flex justify-end flex-col">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="floor Number / Block no / Office Name"
              />
              <input
                class="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Area / Locality"
              />
              <input
                class="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Nearest Landmark"
              />
              <input
                class="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Town / City"
              />
              <input
                class="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="City"
              />
              <input
                class="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Pincode"
              />

              <div className="mt-16 flex justify-end ">
                <button
                  className="block w-full bg-red-600 text-white rounded-md p-4 text-center font-semibold"
                  onClick={() => {
                    updateCardData(updatedContact);
                    closePopup();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidePopup;
