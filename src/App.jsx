import PropTypes from "prop-types";
import { MasterLayout } from "./Layouts";
import { SideBarNav } from "./components";
import { withCurrentMainComponent } from "./hoc";
import "./App.css";
import "./helpers/fontAwesome";

function App(props) {
  const { CurrMain } = props;
  return <MasterLayout sideBarNav={<SideBarNav />} currMain={<CurrMain />} />;
}

App.prototype = {
  CurrMain: PropTypes.func.isRequired,
};

export default withCurrentMainComponent(App);
