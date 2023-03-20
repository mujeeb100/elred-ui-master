import React, { useState } from "react";
import first from "lodash/first";
import isEmpty from "lodash/isEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactEdit({ toEdit = [], updateCardDataItems, setShowEdit }) {
  const contactObj = first(toEdit);
  const {
    contactId,
    contactEmails = [],
    contactPhones = [],
  } = contactObj || {};
  const [emailInputs, setEmailInputs] = useState(contactEmails);
  const [phoneInputs, setPhoneInputs] = useState(contactPhones);

  const updateListState = (value, id) => {
    if (id === "emails") setEmailInputs((prev) => [...prev, value]);
    if (id === "phones") setPhoneInputs((prev) => [...prev, value]);
  };

  const deleteItemFromList = (value) => {
    setEmailInputs((prev) => prev.filter((item) => item !== value));
    setPhoneInputs((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className="flex flex-col mt-9">
      <Body
        id="emails"
        name="Email ID"
        list={emailInputs}
        updateListState={updateListState}
        deleteItemFromList={deleteItemFromList}
      />
      <Body
        id="phones"
        name="Contact Number"
        list={phoneInputs}
        updateListState={updateListState}
        deleteItemFromList={deleteItemFromList}
      />
      <button
        className="block w-full bg-red-600 text-white rounded-md p-4 text-center font-semibold"
        onClick={() => {
          if (!isEmpty(emailInputs) && !isEmpty(phoneInputs)) {
            updateCardDataItems(contactId, emailInputs, phoneInputs);
            setShowEdit();
          }
        }}
      >
        Save
      </button>
    </div>
  );
}

export default ContactEdit;

function Body({ id, name, list, updateListState, deleteItemFromList }) {
  const [input, setInput] = useState("");

  return (
    <div className="w-full my-3">
      <div className="font-semibold">{name}</div>
      {list.map((item) => {
        return (
          <div className="flex justify-between">
            <div>{item}</div>
            <div>
              <button onClick={() => deleteItemFromList(item)}>
                <FontAwesomeIcon
                  icon={["fas", "trash-can"]}
                  size="md"
                  color="red"
                  className="mx-2"
                />
              </button>
            </div>
          </div>
        );
      })}
      <input
        className="bg-gray-100 w-full rounded px-3 py-2 my-2 outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="eg. salesteam@br.in"
      />
      <button
        className="bg-red-50 text-red-800 rounded px-3 py-2 w-full my-2"
        onClick={() => {
          if (!isEmpty(input)) {
            updateListState(input, id);
            setInput("");
          }
        }}
      >
        <FontAwesomeIcon icon={["fas", "circle-plus"]} className="mr-1" />
        Add More
      </button>
    </div>
  );
}
