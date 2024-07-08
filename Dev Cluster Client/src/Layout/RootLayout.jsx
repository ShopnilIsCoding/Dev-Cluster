import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import SideNav from "../Components/Nav/SideNav";


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-6">
                <SideNav></SideNav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;