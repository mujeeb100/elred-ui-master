import { useState } from "react";

export function useContactState(arr) {
  const [
    {
      cardContent: { contactLines: init = [], ...restContent } = {},
      ...restContact
    },
    ...restArr
  ] = arr;
  const [state, setState] = useState(init);

  const deleteContact = (id) => {
    setState((prev) => {
      return prev.filter((item) => item.lineId !== id);
    });
  };

  const infoArr = [
    {
      ...restContact,
      cardContent: {
        ...restContent,
        contactLines: state,
      },
    },
    ...restArr,
  ];

  return { infoArr, deleteContact };
}
