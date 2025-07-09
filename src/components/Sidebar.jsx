import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiGrid,
  FiList,
  FiUsers,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiInfo,
  FiMinusCircle,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const menuitems = [
    { icon: <FiHome size={24} />, label: "Home" },
    { icon: <FiGrid size={24} />, label: "Projects" },
    { icon: <FiList size={24} />, label: "Tasks" },
    { icon: <FiUsers size={24} />, label: "Team" },
    { icon: <FiSettings size={24} />, label: "Settings" },
  ];

  return (
    <motion.aside
      initial={{ width: 80 }}
      animate={{ width: isOpen ? 220 : 80 }}
      className="fixed h-full bg-white border-r border-gray-200 flex flex-col justify-between shadow-sm"
    >
      <div className="flex flex-col h-full justify-between">
        {/* logo */}
        <div className="flex justify-between items-center p-4 sticky top-0 bg-white z-10">
          {isOpen ? (
            <img
              className="w-20"
              src="../../src/assets/images/Logiplogo.png"
              alt="Logip"
            />
          ) : (
            <img
              className="w-20"
              src="../../src/assets/images/logo.png"
              alt="logo"
            />
          )}

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="bg-zinc-200 rounded-md hover:cursor-pointer"
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {menuitems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.label}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center px-6 py-2 rounded-lg transition-colors duration-200 group hover:cursor-pointer hover:bg-gray-100 hover:text-white ${
                  isActive ? "bg-gray-100" : "bg-transparent"
                }`}
              >
                {isOpen ? (
                  <>
                    <span
                      className={`mr-4 ${
                        isActive ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`text-base ${
                        isActive
                          ? "text-black font-bold"
                          : "text-gray-400 font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                ) : (
                  <span
                    className={`mr-4 ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                )}

                {isOpen && (idx === 1 || idx === 2) && (
                  <span className="ml-auto flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                    <span className="text-gray-400 text-lg font-bold">+</span>
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        {/* pro */}
        <div className="bg-gradient-to-b from-zinc-200 to-white rounded-2xl mx-3">
          <div className="flex flex-col justify-center items-center py-2 px-2">
            {isOpen ? (
              <>
                <span className="font-semibold">Upgrade to Pro</span>
                <span className="text-xs text-gray-500 mt-1 mb-2 text-center">
                  Get 1 month free and unlock
                </span>
                <button className="bg-blue-200 text-blue-900 px-4 py-1 rounded-full font-semibold text-sm">
                  Upgrade
                </button>
              </>
            ) : (
              <span className="font-semibold text-xs ">
                <FaStar className="text-yellow-400 mb-2" size={24} />
              </span>
            )}
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col gap-4">
          {isOpen ? (
            <>
              <div className="flex pl-5 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
                <span className="mr-4">
                  <FiInfo
                    size={24}
                    className="flex items-center justify-center rounded-full border-gray-400 text-gray-400"
                  />
                </span>
                <span className="text-gray-400 font-normal">
                  Help and information
                </span>
              </div>
            </>
          ) : (
            <span className="mr-1 py-2 rounded-lg hover:bg-gray-100">
              <FiInfo
                size={24}
                className="flex items-center justify-center rounded-full border-gray-400 text-gray-400 w-full hover:cursor-pointer"
              />
            </span>
          )}
          {isOpen ? (
            <>
              <div className="flex pl-5 hover:bg-gray-100 rounded-lg py-2 hover:cursor-pointer">
                <span className="mr-4">
                  <FiMinusCircle
                    size={24}
                    className="flex items-center  justify-center rounded-full border-gray-400 text-gray-400"
                  />
                </span>
                <span className="text-gray-400 font-normal">Log out</span>
              </div>
            </>
          ) : (
            <span className=" hover:bg-gray-100 rounded-lg py-2 hover:cursor-pointer">
              <FiMinusCircle
                size={24}
                className="text-gray-400 mr-4 pr-1 flex justify-center w-full"
              />
            </span>
          )}
        </div>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
