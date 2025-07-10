import { FiCalendar } from "react-icons/fi";
import { ThumbsUp, Timer, TrendingUp, Triangle } from "lucide-react";

function Content() {
  return (
    <div className="w-full ">
      {/* name */}
      <div className="w-full flex justify-between py-10 border-b border-gray-200">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-sans">Hello, Margaret</h1>
          <p className="text-gray-400">
            Track team progress here, You almost reach a goal
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <h5 className="text-sm text-gray-400">16 May, 2023</h5>
            <div>
              <FiCalendar
                size={40}
                className="bg-gray-200 px-2 py-2 rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* track */}
      <div className="flex justify-between py-5 border-b border-gray-200">
        <div className="flex items-center justify-center gap-4">
          <div>
            <ThumbsUp size={40} className="bg-gray-100 rounded-full px-2" />
          </div>
          <div>
            <span>
              <p className="font-light">Finished</p>
              <p className="flex items-center gap-3">
                18{" "}
                <span className="flex items-center text-green-500">
                  <Triangle size={13} className="rotate-180" />
                  <span className="font-extralight">+8 tasks</span>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className="border border-gray-200" /> {/*divider*/}
        <div className="flex items-center gap-4">
          <div>
            <Timer size={40} className="bg-gray-100 rounded-full px-2" />
          </div>
          <div>
            <span>
              <p className="font-light">Tracked</p>
              <p className="flex items-center gap-3">
                31h{" "}
                <span className="flex items-center text-red-500">
                  <Triangle size={13} />
                  <span className="font-extralight">-6 hours</span>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className="border border-gray-200" /> {/*divider*/}
        <div className="flex items-center gap-4">
          <div>
            <TrendingUp size={40} className="bg-gray-100 rounded-full px-2" />
          </div>
          <div>
            <span>
              <p className="font-light">Efficiency</p>
              <p className="flex items-center gap-3">
                93%{" "}
                <span className="flex items-center text-green-500">
                  <Triangle size={13} className="rotate-180" />
                  <span className="font-extralight">+12%</span>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
