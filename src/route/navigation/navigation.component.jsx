import { Outlet } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown.component.jsx";
import states from "../../../data/INDIAN_STATE.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const stateItems = states.map((state) => ({
    label: state.name,
    value: state.code,
  }));
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className=" bg-[#212529] mx-auto h-[8vh] ">
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-6">
          <img src="./images/logo.png" alt="logo" className="w-[43px] invert" />
          <Dropdown label={"Select State"} items={stateItems} />
        </div>
        {currentUser ? (
          <NavLink className={`text-white`} onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink className={`text-white`} to="/auth">
            SIGN IN
          </NavLink>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
