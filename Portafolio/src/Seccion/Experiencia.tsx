//EXPERIENCIA

import { IoLinkOutline } from "react-icons/io5";

export default function Experiencia() {
  const kiariPageUrl = "https://www.kiarishop.com"; // URL de la página

  return (
    <div id="xp">
      <div id="educ hero h-screen">
        <h2 className="sub-title">Experiencia</h2>
        <div className="hero-content sm:flex-row flex-col ">
          <div>
            <a
              className="link link-hover flex items-center"
              onClick={() => window.open(kiariPageUrl, "_blank")}
            >
              <h3 className="mini-title">Kiari Shop House J & L, C.A. </h3>
              <p className="text-xs px-2 opacity-80">view</p>
              <IoLinkOutline className="size-6" />
            </a>
            <h4 className="minisub-title">Ingeniero Sistemas 2021 - 2025</h4>
            <ul className="list w-2xl">
              <li className="list-row text-lg ">
                <div>
                  Desarrollo de página web estática para la empresa,
                  fortaleciendo su presencia digital y facilitando la
                  comunicación comercial.
                </div>
                <a
                  className="btn btn-primary w-max my-auto"
                  onClick={() => window.open(kiariPageUrl, "_blank")}
                >
                  KIARI
                  <IoLinkOutline className="size-6" />
                </a>
              </li>
              <li className="list-row p-2 px-3">
                Supervision de procesos de produccion
              </li>
              <li className="list-row p-2 px-3">
                Control de calidad del producto
              </li>
              <li className="list-row p-2 px-3"> Gestion de inventario</li>
              <li className="list-row p-2 px-3">
                Optimizacion de operaciones en la produccion
              </li>
              <li className="list-row p-2 px-3">
                Capacitacion tecnica al personal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
