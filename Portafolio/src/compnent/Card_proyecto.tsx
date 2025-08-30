//PROYECTO CARD

import { IoLinkOutline } from "react-icons/io5";

interface Props {
  nombre: String;
  descripcion: String;
  lenguajes: String[];
  image: string;
  path: string;
}

export default function Card_P({
  nombre,
  descripcion,
  lenguajes,
  image,
  path,
}: Props) {
  return (
    <div className="card sm:h-[420px] bg-base-100 shadow-sm p-2">
      <a className="cursor-pointer" onClick={() => window.open(path, "_blank")}>
        <figure>
          <img
            src={image}
            alt="capture"
            className="sm:h-52 w-full object-cover"
          />
        </figure>
      </a>
      <div className="card-body items-center">
        <h3 className="card-title sm:ml-4">
          {nombre}{" "}
          <button
            className="btn btn-ghost btn-primary sm:mx-2"
            onClick={() => window.open(path, "_blank")}
          >
            <IoLinkOutline className="sm:size-6" />
          </button>
        </h3>
        <p className="minisub-title text-center pyb2">{descripcion}</p>
        <div className="card-actions justify-around">
          {lenguajes.map((item, index) => (
            <div
              key={index}
              className="badge badge-outline badge-primary sm:badge-md badge-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
