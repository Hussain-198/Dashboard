import { ChevronDown } from "lucide-react";
import {
  FiActivity,
  FiSearch,
  FiTerminal,
  FiClock,
  FiMoreHorizontal,
} from "react-icons/fi";

function Tasks({theme, setTheme}) {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <h2 className="text-xl font-semibold">Current Tasks</h2>
          <div className="border border-gray-200" /> {/* divider */}
          <p className="flex items-center">Done 30%</p>
        </div>
        <span className="text-sm font-extralight border border-zinc-500 rounded-2xl py-1 px-2 flex items-center gap-1 hover:cursor-pointer">
          Week <ChevronDown className="w-3 h-3" />
        </span>
      </div>
      {/* footer */}
      <div className="flex flex-col gap-y-6 my-6">
        {/* Row 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
              <FiActivity size={18} className="text-black" />
            </span>
            <span className="text-base font-normal">
              Product Review for UI8 Market
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E42] mr-1"></span>
            <span className="text-sm font-normal">In progress</span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 mr-1">
              <FiClock size={24} className="text-white" />
            </span>
            <span className="text-sm font-normal">4h</span>
          </div>
          <div className="hover:rounded-full hover:bg-zinc-200 px-1 py-1 hover:cursor-pointer">
            <FiMoreHorizontal size={18} className="" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 mr-3">
              <FiSearch size={18} className="text-black" />
            </span>
            <span className="text-base font-normal">
              UX Research for Product
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] mr-1 ml-10"></span>
            <span className="text-sm font-normal">On hold</span>
          </div>
          <div className="flex items-center ml-5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 mr-1 ">
              <FiClock size={24} className="text-white" />
            </span>
            <span className="text-sm font-normal">8h</span>
          </div>
          <div className="hover:rounded-full hover:bg-zinc-200 px-1 py-1 hover:cursor-pointer">
            <FiMoreHorizontal size={18} />
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
              <FiTerminal size={18} className="text-black" />
            </span>
            <span className="text-base font-normal">
              App design and development
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10D876] mr-1 ml-4"></span>
            <span className="text-sm font-normal">Done</span>
          </div>
          <div className="flex items-center ml-11">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 mr-1">
              <FiClock size={24} className="text-white" />
            </span>
            <span className="text-sm font-normal">32h</span>
          </div>
          <div className="hover:rounded-full hover:bg-zinc-200 px-1 py-1 hover:cursor-pointer">
            <FiMoreHorizontal size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
