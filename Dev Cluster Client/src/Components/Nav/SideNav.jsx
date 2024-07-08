import { LiaListSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideNav = () => {
    const getNavLinkClass = ({ isActive }) => 
        `flex justify-start items-center gap-4 px-6 py-3 flex-nowrap rounded-[5px] ${isActive ? 'bg-core text-[#FFFF]' : 'text-[#00000099]'}`;

    return (
        <div className="flex flex-col mt-[51px] ml-2">
            <NavLink className={getNavLinkClass} to={'/'} exact="true">
                <LuUsers className="text-xl" />
                <span className="text-nowrap">Add Student</span>
            </NavLink>
            <NavLink className={getNavLinkClass} to={'/manage'}>
                <LiaListSolid className="text-xl" />
                <span className="text-nowrap">Manage Students</span>
            </NavLink>
            <p className="flex text-[#00000099] justify-start items-center gap-4 px-6 py-3 flex-nowrap">
                <TbLogout className="text-xl" />
                <span className="text-nowrap">Logout</span>
            </p>
        </div>
    );
};

export default SideNav;
