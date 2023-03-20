import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ContactCard(props) {
  const {
    cardData = [],
    name,
    iconHeading,
    emailIcon,
    phoneIcon,
    displayAllContacts = false,
  } = props;
  return (
    <div>
      {/* card title */}
      <div>
        <span className="pr-2">
          <FontAwesomeIcon
            icon={["fas", `${iconHeading}`]}
            color="lightgray"
            size="lg"
          />
        </span>
        <span className="text-xl [font-weight:600]">{name}</span>
      </div>
      {/* card inner details */}
      <div className="mt-8">
        {cardData.map((contact, index) => {
          const { contactId, contactEmails, contactPhones } = contact;
          return (
            (index === 0 || displayAllContacts) && (
              <div key={contactId} className="mt-4">
                <div>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", `${emailIcon}`]}
                      color="lightgray"
                      size="sm"
                    />
                  </span>
                  <span>
                    {contactEmails.map((email, i) =>
                      i == contactEmails.length - 1 ? email : <>{email} / </>
                    )}
                  </span>
                </div>
                <div>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", `${phoneIcon}`]}
                      color="lightgray"
                      size="sm"
                    />
                  </span>
                  <span>
                    {contactPhones.map((phone, i) =>
                      i == contactPhones.length - 1 ? phone : <>{phone} / </>
                    )}
                  </span>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

ContactCard.prototype = {
  cardContent: PropTypes.shape({}),
  displayAllContacts: PropTypes.bool,
};

export default ContactCard;
