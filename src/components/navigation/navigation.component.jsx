import { Outlet } from "react-router-dom";
import DeveloperButton from "../developerButton/developerButton.component";
import Dropdown from "../dropdown/dropdown.component";
import states from "../../../data/INDIAN_STATE.js";

const Navigation = () => {
  const stateItems = states.map((state) => ({
    label: state.name,
    value: state.code,
  }));

  return (
    <div className="bg-gradient-to-r from-white/70 via-white/40 to-white/10 w-[90vw] mx-auto absolute top-4 shadow-md shadow-black left-[8%] z-[1000] rounded-lg">
      <div className="flex justify-between px-2 py-2 backdrop-blur-sm">
        <div className="flex gap-6">
          <img src="images/logo.png" alt="logo" className="w-[43px]" />
          <Dropdown label={"Select State"} items={stateItems} />
        </div>
        <div className="mt-2">
          <DeveloperButton />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
