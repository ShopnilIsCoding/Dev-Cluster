import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import SideNav from "../Components/Nav/SideNav";


const RootLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="flex gap-6 mt-[53px]">
                <div className="lg:block md:block hidden lg:min-w-[192px]">
                <SideNav></SideNav>
                </div>
                <div className="lg:mr-[19px] overflow-x-scroll flex-1">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default RootLayout;