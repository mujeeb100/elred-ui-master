import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArticalViewer({ article = {} }) {
  const { name, contents = [] } = article;
  const [activeContentId, setActiveContentId] = useState(() => {
    const { contentId } = contents[0];
    return contentId;
  });

  return (
    <div className="flex justify-between">
      <div className="flex-1">
        <h2 className="text-lg font-semibold inline-block">{name}</h2>
        <button>
          <FontAwesomeIcon
            icon={["fas", "pen"]}
            size="md"
            color="red"
            className="mx-2"
          />
        </button>
        {contents.map(({ contentId, contentName, contentText }, index) => {
          return (
            contentId === activeContentId && (
              <div>
                <h3 className="text-md font-semibold p-3">
                  {index + 1}. {contentName}
                </h3>
                <p className="text-gray-500">{contentText}</p>
              </div>
            )
          );
        })}
      </div>
      <div className="border-2 p-8">
        <div className="text-sm font-semibold mb-8">Table of Contents:</div>
        {contents.map(({ contentId, contentName }) => {
          const activeClass =
            contentId === activeContentId ? "text-black" : "text-gray-400";
          return (
            <div key={contentId} className="my-2">
              <button onClick={() => setActiveContentId(contentId)}>
                <span className={` text-sm py-2 ${activeClass}`}>
                  {contentName}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ArticalViewer.prototype = {
  article: PropTypes.shape({}),
};

export default ArticalViewer;
