import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import SideBar from "./SideBar";

function MasterLayout(props) {
  const { sideBarNav, currMain } = props;
  return (
    <div>
      <Header />
      <section className="flex p-4 gap-x-4">
        <SideBar>{sideBarNav}</SideBar>
        <main className="w-full">
          <div className="bg-white py-5 px-10">{currMain}</div>
        </main>
      </section>
    </div>
  );
}

MasterLayout.prototype = {
  sideBarNav: PropTypes.element.isRequired,
  currMain: PropTypes.element.isRequired,
};

export default MasterLayout;
