import { useContext } from "react";
import { LuUser } from "react-icons/lu";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="flex justify-between  font-ibm lg:px-20 mt-4">
            <h1 className="text-xl text-core font-bold ">Dev Cluster</h1>
            <p className="flex shadow-[0_0_3px_0_rgba(0,0,0,0.2)] justify-center items-center mt-1 gap-4 p-3 [#dddad9] rounded-lg lg:w-[296px]"><LuUser className="text-2xl"/> <span className="text-sm">{user?.email? user.email : "username@dev-cluster.com"}</span></p>
        </div>
    );
}; 

export default Navbar;