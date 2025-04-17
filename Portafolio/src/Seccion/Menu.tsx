// MENU

import { IoHomeSharp } from "react-icons/io5";
import { FaFileContract } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BiSolidInfoSquare } from "react-icons/bi";

const menu_item = [
  {
    datatip: "Home",
    icon: <IoHomeSharp className="size-6" />,
    path: "#home",
  },
  {
    datatip: "About me",
    icon: <IoPerson className="size-6" />,
    path: "#me",
  },
  {
    datatip: "Experience",
    icon: <FaFileContract className="size-6" />,
    path: "#xp",
  },
  {
    datatip: "Skills",
    icon: <IoStatsChartSharp className="size-6" />,
    path: "#skil",
  },
  {
    datatip: "Education",
    icon: <RiGraduationCapFill className="size-6" />,
    path: "#educ",
  },
  {
    datatip: "Portfolio",
    icon: <IoBriefcaseSharp className="size-6" />,
    path: "#proy",
  },
  {
    datatip: "Info",
    icon: <BiSolidInfoSquare className="size-6" />,
    path: "#info",
  },
];

export default function Menu() {
  return (
    <div className="fixed inset-2 flex justify-end items-center w-16 z-50">
      <ul className="menu bg-primary text-primary-content rounded-box shadow-2xl flex justify-center h-[450px] gap-4 z-50">
        {menu_item.map((item, index) => (
          <li>
            <a
              className="tooltip tooltip-left"
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
