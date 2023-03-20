import React, { useState } from "react";
import PropTypes from "prop-types";
import reduce from "lodash/reduce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactCard from "./ContactCard";
import CommonCard from "./CommonCard";
import SidePopup from "../popup";
import Backdrop from "../popup/Backdrop";

function AboutUsInfo(props) {
  const { infoCards } = props;
  const [displayFullCardContent, setFullCardContent] = useState(() => {
    return reduce(
      infoCards,
      (init, item) => {
        if (item.plusBtn) init[item.id] = false;
        return init;
      },
      {}
    );
  });
  const [aboutCards, setAboutCards] = useState(infoCards);
  const [showSidePopup, setShowSidePopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  const handleEditClick = (card) => {
    setShowSidePopup(true);
    setPopupData(card);
  };

  const updateCardData = (updatedData) => {
    setAboutCards((prev) =>
      prev.map((item) => {
        if (item.id === popupData.id) item.cardData = updatedData;
        return item;
      })
    );
    setPopupData({});
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {aboutCards.map((card, index) => {
        const {
          id,
          name,
          plusBtn,
          cardData,
          iconHeading,
          emailIcon,
          phoneIcon,
        } = card;
        const cardItemsCount = Array.isArray(cardData) && cardData.length;
        return (
          <div
            key={id}
            className="flex justify-between border-2 rounded-lg p-3 basis-[22rem]"
          >
            {id === "card-contact" ? (
              <ContactCard
                id={id}
                name={name}
                displayAllContacts={displayFullCardContent[id]}
                cardData={cardData}
                iconHeading={iconHeading}
                emailIcon={emailIcon}
                phoneIcon={phoneIcon}
              />
            ) : (
              <CommonCard
                id={id}
                name={name}
                displayAllContacts={displayFullCardContent[id]}
                cardData={cardData}
                iconHeading={iconHeading}
              />
            )}
            <div>
              <div>
                <button
                  className="text-red-500 ml-1"
                  onClick={() => handleEditClick(card)}
                >
                  <FontAwesomeIcon icon={["fas", "pen"]} />
                </button>
              </div>
              <>
                {index === 0 && (
                  <>
                    {showSidePopup && (
                      <Backdrop
                        showBackDrop={showSidePopup}
                        hideBackDropAndModal={() => setShowSidePopup(false)}
                      />
                    )}
                    <SidePopup
                      popupData={popupData}
                      isOpen={showSidePopup}
                      closePopup={() => setShowSidePopup(false)}
                      updateCardData={updateCardData}
                    />
                  </>
                )}
              </>
              {plusBtn && cardItemsCount > 1 && (
                <button
                  onClick={() =>
                    setFullCardContent((prev) => ({
                      ...prev,
                      [id]: !prev[id],
                    }))
                  }
                >
                  <div className="border rounded-full mt-12 p-1 bg-red-100 text-red-500 text-xs">
                    + {cardItemsCount - 1}
                  </div>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

AboutUsInfo.defaultProps = {
  infoCards: [
    {
      id: "card-contact",
      name: "Contact",
      plusBtn: true,
      iconHeading: "address-book",
      emailIcon: "envelope",
      phoneIcon: "phone",
      cardData: [
        {
          contactId: "contact-line-1",
          contactName: "Sales Team",
          contactEmails: ["salesteam@br.in", "salesteam2@br.in"],
          contactPhones: ["+918511591740", "8000058214"],
        },
        {
          contactId: "contact-line-2",
          contactName: "Marketing Team",
          contactEmails: ["salesteam@br.in", "salesteam2@br.in"],
          contactPhones: ["+918511591740", "8000058214"],
        },
        {
          contactId: "contact-line-3",
          contactName: "Marketing Team",
          contactEmails: ["salesteam@br.in", "salesteam2@br.in"],
          contactPhones: ["+918511591740", "8000058214"],
        },
      ],
    },
    {
      id: "card-address",
      name: "Address",
      iconHeading: "location-dot",
      cardData: {
        addressLine1: "C-1",
        addressLine2: "351 / 4",
        addressLine3: "GIDC Makarpura",
        addressLine4: "Vadodra",
        addressLine5: "Gujrat",
        addressLine6: "India",
      },
    },
    {
      id: "card-hours-of-operations",
      name: "Hours of operations",
      iconHeading: "business-time",
      cardData: "Monday To Friday - 9:00 Am to 06:00 Pm",
    },
    {
      id: "card-social-media-links",
      name: "Social Media & Links",
      iconHeading: "link",
      cardData: [
        {
          id: "website",
          link: "",
          iconName: "globe",
        },
        {
          id: "instagram",
          link: "",
          iconName: "instagram",
        },
        {
          id: "facebook",
          link: "",
          iconName: "facebook",
        },
        {
          id: "twitter",
          link: "",
          iconName: "twitter",
        },
      ],
    },
    {
      id: "card-statement",
      name: "Statement",
      iconHeading: "quote-left",
      plusBtn: true,
      cardData: [
        "You think it we ink it.",
        "We ink it even before you think it.",
      ],
    },
  ],
};

AboutUsInfo.prototype = {
  infoCards: PropTypes.array,
};

export default AboutUsInfo;
