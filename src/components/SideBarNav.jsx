import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItems } from "../helpers";

function SideBarNav(props) {
  const { navItems = [] } = props;
  const { currNav = "" } = useParams();

  return (
    <nav>
      <div>
        <ul>
          {navItems &&
            navItems.map((item = {}) => {
              const { id, icon, name, toUrl } = item;
              const activeNavStyles =
                currNav === toUrl ? "bg-red-100 text-red-700" : "";
              return (
                <li key={id}>
                  <Link to={`/${toUrl}`}>
                    <div
                      className={`text-gray-400 py-3 px-2 ${activeNavStyles}`}
                    >
                      <div className="w-8 inline-block">
                        <FontAwesomeIcon icon={["fas", icon]} size="lg" />
                      </div>
                      <span className="text-xs">{name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}

SideBarNav.defaultProps = {
  navItems,
};

SideBarNav.prototype = {
  navItems: PropTypes.shape([]),
};

export default SideBarNav;
