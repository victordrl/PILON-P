// MENU
import { useRef } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaFileContract } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BiSolidInfoSquare } from "react-icons/bi";

import { IoMenuSharp } from "react-icons/io5";

const menu_item = [
  {
    datatip: "Home",
    icon: <IoHomeSharp className="sm:size-6 size-5" />,
    path: "#home",
  },
  {
    datatip: "About me",
    icon: <IoPerson className="sm:size-6 size-5" />,
    path: "#me",
  },
  {
    datatip: "Experience",
    icon: <FaFileContract className="sm:size-6 size-5" />,
    path: "#xp",
  },
  {
    datatip: "Skills",
    icon: <IoStatsChartSharp className="sm:size-6 size-5" />,
    path: "#skil",
  },
  {
    datatip: "Education",
    icon: <RiGraduationCapFill className="sm:size-6 size-5" />,
    path: "#educ",
  },
  {
    datatip: "Portfolio",
    icon: <IoBriefcaseSharp className="sm:size-6 size-5" />,
    path: "#proyec",
  },
  {
    datatip: "Info",
    icon: <BiSolidInfoSquare className="sm:size-6 size-5" />,
    path: "#info",
  },
];

export default function Menu() {
  const drawerRef = useRef<HTMLInputElement>(null);

  return (
    <div className="fixed inset-2 flex sm:items-center w-16 z-50">
      <div className="">
        <div className="drawer">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            ref={drawerRef}
          />
          <div className="drawer-content">
            {/* Button to open the drawer */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button sm:hidden"
            >
              <IoMenuSharp />
            </label>
          </div>
          <div className="drawer-side sm:hidden w-screen h-full">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-primary text-primary-content min-h-full w-max gap-2 ">
              {menu_item.map((item, index) => (
                <li key={index}>
                  <a
                    className="tooltip tooltip-right"
                    href={item.path}
                    data-tip={item.datatip}
                    onClick={() => {
                      if (drawerRef.current) {
                        drawerRef.current.checked = false;
                      }
                    }}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="hidden sm:menu sm:bg-primary text-primary-content rounded-box shadow-2xl sm:flex justify-center sm:h-[400px] gap-4 z-50"
      >
        {menu_item.map((item, index) => (
          <li>
            <a
              className="tooltip tooltip-right"
              key={index}
              href={item.path}
              data-tip={item.datatip}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
