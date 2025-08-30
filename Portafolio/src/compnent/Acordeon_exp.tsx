// CARD DE EXPERIENCIA EN EMPRESA

import { IoLinkOutline } from "react-icons/io5";

interface Props {
  empresa: string;
  cargo: string;
  tiempo: string;
  lista: string[];
  path: string;
  open?: boolean;
}

export default function Acordeon({
  empresa,
  cargo,
  tiempo,
  lista,
  path,
  open = false,
}: Props) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="checkbox" name="my-accordion-2" defaultChecked={open} />
      <div className="collapse-title font-semibold">
        <div className="link link-hover flex items-center">
          <h3 className="mini-title">{empresa}</h3>

          <p className={path != "" ? "text-xs px-2 opacity-80" : "hidden"}>
            view
          </p>
          <IoLinkOutline className={path != "" ? "size-6" : "hidden"} />
        </div>

        <h4 className="minisub-title">
          {cargo}
          <span> . </span>
          {tiempo}
        </h4>
      </div>
      <div className="collapse-content text-sm">
        <ul className="list w-full">
          {lista.map((item, index) => (
            <li key={index} className="list-row p-2 px-3">
              {item}
            </li>
          ))}
          <li className="flex sm:flex-row flex-col sm:text-lg p-2">
            <a
              className="btn btn-block btn-primary sm:btn-md btn-xs sm:my-auto"
              onClick={() => window.open(path, "_blank")}
            >
              Ver más
              <IoLinkOutline className="size-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
