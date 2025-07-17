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
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { FaStar, FaSun, FaMoon } from "react-icons/fa";
import Logiplogo from "../../src/assets/images/Logiplogo.png";
import Logo from "../../src/assets/images/logo.png";

function Sidebar({ isOpen, setIsOpen, theme, setTheme }) {
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
      className={`fixed h-full  border-r  flex flex-col justify-between shadow-sm ${
        theme === "dark"
          ? "bg-black border-gray-200"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        {/* logo */}
        <div className="flex justify-between items-center p-4 sticky top-0 bg-white z-10">
          {isOpen ? (
            <img
              className="w-20"
              src={Logiplogo}
              alt="Logip"
            />
          ) : (
            <img
              className="w-20"
              src={Logo}
              alt="logo"
            />
          )}

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={`${
              theme == "dark" ? "bg-zinc-800" : "bg-zinc-200"
            } rounded-md hover:cursor-pointer`}
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
                className={`flex items-center px-6 py-2 rounded-lg transition-colors duration-200 group hover:cursor-pointer ${
                  theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-100"
                } hover:text-white ${
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
                  <span
                    className={`ml-auto flex items-end justify-center w-6 h-6 rounded-full ${
                      theme == "dark" ? "bg-zinc-800" : "bg-gray-100"
                    }`}
                  >
                    <span className="text-gray-400 text-lg font-bold">+</span>
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        {/* pro */}
        <div
          className={` rounded-2xl mx-3 ${
            theme == "dark"
              ? "bg-gradient-to-b from-zinc-800 to-black"
              : "bg-gradient-to-b from-zinc-200 to-white"
          }`}
        >
          <div className="flex flex-col justify-center items-center py-2 px-2">
            {isOpen ? (
              <>
                <span className="font-semibold">Upgrade to Pro</span>
                <span className="text-xs text-gray-500 mt-1 mb-2 text-center">
                  Get 1 month free and unlock
                </span>
                <button className="bg-blue-200 text-blue-900 px-4 py-1 rounded-full font-semibold text-sm hover:cursor-pointer">
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
        <div>
          {isOpen ? (
            <div className="flex flex-col text-gray-400 gap-2">
              <button
                className={`flex gap-5 pl-5 py-2 rounded-lg ${
                  theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-200"
                } hover:cursor-pointer items-center`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400" size={24} />
                ) : (
                  <FaMoon className="text-black" size={24} />
                )}
                <p>{theme === "dark" ? "Light" : "Dark"}</p>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center   gap-5">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`flex w-full justify-center rounded-lg ${
                  theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-200"
                } py-2 hover:cursor-pointer`}
              >
                {theme == "dark" ? (
                  <FaSun className="text-yellow-400" size={24} />
                ) : (
                  <FaMoon className="text-black" size={24} />
                )}
              </button>
            </div>
          )}
        </div>
        {/* footer */}
        <div className="flex flex-col gap-4">
          {isOpen ? (
            <>
              <div
                className={`flex pl-5 py-2 rounded-lg ${
                  theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-100"
                } hover:cursor-pointer`}
              >
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
            <span
              className={`mr-1 py-2 rounded-lg ${
                theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-100"
              }`}
            >
              <FiInfo
                size={24}
                className="flex items-center justify-center rounded-full border-gray-400 text-gray-400 w-full hover:cursor-pointer"
              />
            </span>
          )}
          {isOpen ? (
            <>
              <div
                className={`flex pl-5 py-2 rounded-lg ${
                  theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-100"
                } hover:cursor-pointer`}
              >
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
            <span
              className={`rounded-lg py-2 hover:cursor-pointer ${
                theme == "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-100"
              }`}
            >
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
