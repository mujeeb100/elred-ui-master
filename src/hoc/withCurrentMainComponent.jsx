import { useParams } from "react-router-dom";
import find from "lodash/find";
import get from "lodash/get";
import MainComponents from "../components";
import { navItems } from "../helpers";

const withCurrentMainComponent = (WrappedComponent) => {
  const Component = () => {
    const { currNav = "" } = useParams();
    const obj = find(navItems, (currItem) => {
      if (currItem.toUrl === currNav) return currItem;
    });
    const component = get(obj, 'component', "");
    return <WrappedComponent CurrMain={MainComponents[component]} />;
  };
  return Component;
};

export default withCurrentMainComponent;
