import React, { useState, useId } from "react";
import isEmpty from "lodash/isEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactEdit from "./ContactEdit";

function ContactPopup(props) {
  const {
    popupData: { cardData = [], emailIcon, phoneIcon } = {},
    updateCardData,
    closePopup,
  } = props;
  const [updatedContact, setUpdatedContact] = useState(cardData);
  const [showEdit, setShowEdit] = useState(() =>
    cardData.length ? false : true
  );
  const [toEdit, setToEdit] = useState({});
  const contId = useId();

  const handleDeleteClick = (id) => {
    setUpdatedContact((prev) => prev.filter((item) => item.contactId !== id));
  };

  const handleEditClick = (id) => {
    setShowEdit(true);
    setToEdit(updatedContact.filter((item) => item.contactId === id));
  };

  const updateCardDataItems = (id, emails, phones) => {
    setUpdatedContact((prev) => {
      let newArray = prev.map((item) => {
        if (item.contactId === id)
          return { ...item, contactEmails: emails, contactPhones: phones };
        return item;
      });
      if (isEmpty(id)) {
        newArray = [
          ...newArray,
          {
            contactId: contId,
            contactName: "contact",
            contactEmails: emails,
            contactPhones: phones,
          },
        ];
      }
      return newArray;
    });
    setToEdit({});
  };

  return (
    <div>
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
      {!showEdit && (
        <button
          className="absolute top-7 right-4 flex justify-center align-top gap-1"
          onClick={() => setShowEdit(true)}
        >
          <FontAwesomeIcon
            icon={["fas", "add"]}
            size="xs"
            className="border text-red-600 border-red-600 rounded-full p-1 bg-transparent"
          />
          <span className="text-red-600 font-semibold">Add</span>
        </button>
      )}
      <p className="text-gray-500 mt-3">
        Please provide the company's email & contacts
      </p>
      {!showEdit ? (
        <>
          <div className="flex flex-col">
            {updatedContact.map(
              ({ contactId, contactName, contactEmails, contactPhones }) => {
                return (
                  <div key={contactId} className="border p-3 rounded-lg my-2">
                    <div className="flex flex-col gap-y-3">
                      <div className="flex flex-row justify-between my-2">
                        <div>
                          <FontAwesomeIcon
                            icon={["fas", "address-book"]}
                            size="lg"
                            color="lightgray"
                            className="mr-4"
                          />
                          <span>{contactName}</span>
                        </div>
                        <div>
                          <button onClick={() => handleDeleteClick(contactId)}>
                            <FontAwesomeIcon
                              icon={["fas", "trash-can"]}
                              size="md"
                              color="red"
                              className="mx-2"
                            />
                          </button>
                          <button onClick={() => handleEditClick(contactId)}>
                            <FontAwesomeIcon
                              icon={["fas", "pen"]}
                              size="md"
                              color="red"
                              className="mx-2"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="my-2">
                        <span className="mr-5">
                          <FontAwesomeIcon
                            icon={["fas", `${emailIcon}`]}
                            color="lightgray"
                            size="sm"
                          />
                        </span>
                        <span>
                          {contactEmails.map((email, i) =>
                            i == contactEmails.length - 1 ? (
                              email
                            ) : (
                              <>{email} / </>
                            )
                          )}
                        </span>
                      </div>
                      <div className="my-2">
                        <span className="mr-5">
                          <FontAwesomeIcon
                            icon={["fas", `${phoneIcon}`]}
                            color="lightgray"
                            size="sm"
                          />
                        </span>
                        <span>
                          {contactPhones.map((phone, i) =>
                            i == contactPhones.length - 1 ? (
                              phone
                            ) : (
                              <>{phone} / </>
                            )
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <button
            className="block mt-1 w-full bg-red-600 text-white rounded-md p-4 text-center font-semibold"
            onClick={() => {
              updateCardData(updatedContact);
              closePopup();
            }}
          >
            Save
          </button>
        </>
      ) : (
        <ContactEdit
          toEdit={toEdit}
          updateCardDataItems={updateCardDataItems}
          updateCardData={updateCardData}
          setShowEdit={() => setShowEdit(false)}
        />
      )
      }
    </div>
  );
}

export default ContactPopup;
