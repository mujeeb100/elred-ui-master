import React from "react";
import { Link, useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import AboutUsInfo from "./AboutUsInfo";
import ArticalViewer from "./ArticalViewer";
import { AboutUsItems, AboutUsNavs, articles } from "../../helpers";

function AboutUsNav() {
  const { pathname, hash } = useLocation();
  const hashValue = hash.slice(1);

  return (
    <div className="py-10">
      <ul className="flex gap-7 border-b border-gray-100 px-2">
        {AboutUsItems.map((item) => {
          const { id, name, toUrl } = item;
          const active =
            hashValue === toUrl || (isEmpty(hashValue) && toUrl === "info")
              ? "text-black border-b-2 border-red-300"
              : "";
          return (
            <li key={id} className={`${active} text-gray-500 text-sm py-2`}>
              <Link to={`${pathname}#${toUrl}`}>
                <div className="">{name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* About us children*/}
      <div className="py-5">
        {(isEmpty(hashValue) || hashValue === AboutUsNavs.info) && (
          <AboutUsInfo />
        )}
        {hashValue === AboutUsNavs.privacyPolicy && (
          <ArticalViewer article={articles[hashValue]} />
        )}
        {hashValue === AboutUsNavs.termsCondition && (
          <ArticalViewer article={articles[hashValue]} />
        )}
        {(hashValue === AboutUsNavs.FAQ ||
          hashValue === AboutUsNavs.complaintsFeedBack) && (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            quo, provident quaerat quasi laboriosam nisi architecto rem harum
            voluptatem magnam repellat atque deserunt illo eum hic enim
            distinctio at nostrum!
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsNav;
