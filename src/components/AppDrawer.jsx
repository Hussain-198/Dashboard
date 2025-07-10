import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiPaperclip,
  FiX,
  FiMessageCircle,
} from "react-icons/fi";

import { Smile, Mic } from "lucide-react";

const activities = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    time: "10.15 AM",
    action: "Commented on",
    project: "Stark Project",
    projectlink: "#",
    message:
      "Hi! Next week we'll start a new project. I'll tell you all the details later",
    type: "comment",
  },
  {
    id: 2,
    user: {
      name: "Guy Hawkins",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    time: "10:15 AM",
    action: "Added a file to ",
    project: "7Heros Project",
    projectlink: "#",
    file: {
      name: "Homepage.fig",
      size: "13.4 Mb",
      icon: "https://www.figma.com/community/resource/8f3b2e8c-0d3f-4409-ae0d-42449d61b841/thumbnail",
    },
    type: "file",
  },
  {
    id: 3,
    user: {
      name: "Kristin Watson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    time: "10.15 AM",
    action: "Commented on ",
    project: "7Heros Project",
    projectlink: "#",
    type: "comment",
  },
];

function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="fixed top-2 right-2 z-50 bg-zinc-300 text-black rounded-full p-3 shadow-lg hover:bg-zinc-200 transition hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? "none" : "block" }}
        aria-label="Open drawer"
      >
        <FiMessageCircle className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-100 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close drawer"
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="flex flex-col justify-between h-screen">
              <div>
                {/* profile */}
                <div className="flex flex-col items-center bg-gray-50 pt-10 pb-6 rounded-xl m-3">
                  <div className="relative">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Megan Norton"
                      className="w-20 h-20 rounded-full border-4 border-white shadow"
                    />
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-lg">Megan Norton</div>
                    <div className="text-gray-400 text-sm">@megnorton</div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 hover:cursor-pointer">
                      <FiPhone className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 hover:cursor-pointer">
                      <FiVideo className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 hover:cursor-pointer">
                      <FiMoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                {/* activity */}
                <div className="flex items-center w-full my-4 px-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="mx-2 text-gray-700 font-semibold text-sm whitespace-nowrap">
                    Activity
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                {/* messages */}
                <div className="flex-1 overflow-y-auto px-4 py-6 bg-white">
                  <div className="space-y-6">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <img
                          src={activity.user.avatar}
                          alt={activity.user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-800">
                                {activity.user.name}
                              </span>
                              <span className="text-gray-400 font-light text-xs">
                                {activity.time}
                              </span>
                            </div>
                            <span className="text-gray-400">
                              {activity.action}{" "}
                              <a
                                href={activity.projectlink}
                                className="text-blue-400 hover:underline font-medium"
                              >
                                {activity.project}
                              </a>
                            </span>
                          </div>
                          {activity.type == "comment" && activity.message && (
                            <div className="mt-2 bg-blue-50 text-gray-700 rounded-lg px-3 py-2 text-sm relative">
                              {activity.message}
                            </div>
                          )}
                          {activity.type == "file" && activity.file && (
                            <div className="mt-2 flex items-center bg-blue-50 rounded-lg px-3 py-2 hover:cursor-pointer">
                              <img
                                src={activity.file.icon}
                                alt="File icon"
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div>
                                <div className="font-medium text-gray-800 text-sm">
                                  {activity.file.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {activity.file.size}
                                </div>
                              </div>
                              <button className="ml-auto text-blue-600 hover:underline text-xs hover:cursor-pointer">
                                Download
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* message input */}
              <div>
                <div className=" bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 hover:rounded-full hover:bg-zinc-200 px-2 py-2">
                        <FiPaperclip className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        placeholder="Write a message"
                        className="w-full h-12 pl-14 pr-4 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm placeholder-gray-400 font-medium"
                      />
                      <span className="absolute right-11 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 hover:rounded-full hover:bg-zinc-200 px-2 py-2">
                        <Smile className="w-5 h-5" />
                      </span>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 hover:rounded-full hover:bg-zinc-200 px-2 py-2">
                        <Mic className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppDrawer;
