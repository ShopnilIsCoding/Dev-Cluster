import { LiaListSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const SideNav = () => {
    const getNavLinkClass = ({ isActive }) => 
        `flex justify-start items-center gap-4 lg:px-6 px-2 py-3  lg:flex-nowrap rounded-[5px] ${isActive ? 'bg-core text-[#FFFF]' : 'text-[#00000099]'}`;
    const {  logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
          .then(() => {
            Navigate("/login");
          })
          .catch();
      };
    return (
        <div className="flex flex-col flex-wrap lg:mt-[51px] lg:ml-2">
            <NavLink className={getNavLinkClass} to={'/'} exact="true">
                <LuUsers className="text-xl" />
                <span className="text-nowrap ">Add Student</span>
            </NavLink>
            <NavLink className={getNavLinkClass} to={'/manage'}>
                <LiaListSolid className="text-xl" />
                <span className="text-nowrap ">Manage Students</span>
            </NavLink>
            <p onClick={handleSignOut} className="flex text-[#00000099] justify-start items-center gap-4 px-6 py-3 flex-nowrap cursor-pointer">
                <TbLogout className="text-xl" />
                <span className="text-nowrap ">Logout</span>
            </p>
        </div>
    );
};

export default SideNav;
