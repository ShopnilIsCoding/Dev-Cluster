import { IoMdSearch } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import UseDateTime from "../Hooks/UseDateTime";


const ManageStudents = () => {
  const formattedDateTime = UseDateTime(60000); 

  return (
    <div className="font-ibm w-full flex flex-col overflow-x-scroll">
      <div className="flex justify-around items-center w-full lg:min-h-[44px] gap-4 flex-wrap lg:flex-nowrap flex-1">
        <p className="text-[16px] font-semibold">Manage Students</p>
        <div className="bg-[#EFF3F6] flex items-center border-[0.5px_solid_#D4D8DD] h-[44px] rounded-[10px] px-[15px] gap-[3px]">
          <IoMdSearch />
          <input
            type="text"
            placeholder="Search"
            className="text-[#B5B8BF] bg-[#EFF3F6]"
          />
        </div>
        <button className="text-[#4E5159] w-[84px] h-[44px] py-[14px] px-[11px] text-[13px] font-light bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 font-inter">
          Export
        </button>
        <button className="text-[#4E5159] w-[84px] h-[44px] py-[14px] px-[11px] text-[13px] font-light bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 font-inter">
          Filter
        </button>
        <button className="text-[#4E5159] w-[84px] h-[44px] py-[14px] px-[11px] text-[13px] font-light bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 font-inter">
          Print
        </button>
        <div className="text-[#000000] text-sm">
          {formattedDateTime}
        </div>
      </div>
      <div className="mt-6 overflow-auto rounded-t-[5px]">
        <table className="table overflow-x-scroll">
          <thead className="bg-core text-[#FFFF] text-sm font-ibm">
            <tr>
              <th className="w-1/4">Name</th>
              <th className="w-1/4 text-center">Class</th>
              <th className="w-1/4 text-center">Roll No.</th>
              <th className="w-1/4 text-center">View / Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/4">Bruce Banner</td>
              <td className="w-1/4 text-center">VI-A</td>
              <td className="w-1/4 text-center">12</td>
              <td className="w-1/4 text-center text-core">
                <div className="flex justify-center items-center gap-[25px] text-2xl">
                  <MdOutlineRemoveRedEye className="cursor-pointer" />
                  <RiEdit2Line className="cursor-pointer" />
                  <RiDeleteBin6Line className="cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-1/4">Doctor Strange</td>
              <td className="w-1/4 text-center">VII-A</td>
              <td className="w-1/4 text-center">13</td>
              <td className="w-1/4 text-center text-core">
                <div className="flex justify-center items-center gap-[25px] text-2xl">
                  <MdOutlineRemoveRedEye className="cursor-pointer" />
                  <RiEdit2Line className="cursor-pointer" />
                  <RiDeleteBin6Line className="cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
