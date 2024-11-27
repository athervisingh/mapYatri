import { Outlet } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown.component.jsx";
import states from "../../../data/INDIAN_STATE.js";

const Navigation = () => {
  
  const stateItems = states.map((state) => ({
    label: state.name,
    value: state.code,
  }));

  return (
    <div className=" bg-[#212529] mx-auto ">
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-6">
          <img src="./images/logo.png" alt="logo" className="w-[40px] invert" />
          <Dropdown label={"Select State"} items={stateItems} />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
