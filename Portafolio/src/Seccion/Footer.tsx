// FOOTER SECCION
import { useState } from "react";

import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const [copyMessage, setCopyMessage] = useState("");

  const copy_text = (text: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopyMessage("Copiado");

          setTimeout(() => setCopyMessage(""), 300);
        })
        .catch((err) => console.error("Error", err));
    };
  };

  return (
    <footer
      id="info"
      className="footer bg-primary text-primary-content p-10 justify-center"
    >
      <div className=" sm:footer-horizontal footer-vertical ">
        <aside>
          <div className="mask mask-squircle w-24 my-4">
            <img src="/kirby.png" alt="icono" className="bg-cover" />
          </div>
          <div className="flex">
            <HiLocationMarker className="size-11" />
            <p className="footer-title text-2xl my-auto"> Ubicacion</p>
          </div>
          <p className="text-lg">Venezuela</p>
          <p>Estado Bolibar, Municipio Caroni, Puerto Ordaz, Paratepuy</p>
          <p className="py-4">
            © 2025 PILON . Todos los derechos reservados. Quiero Chamba
          </p>
        </aside>
        <nav>
          <ul className="menu bg-primary rounded-box w-72">
            <li>
              <h6 className="footer-title text-2xl">Contactame</h6>
              <ul>
                <li
                  className={copyMessage === "" ? "" : "tooltip"}
                  data-tip={copyMessage}
                >
                  <a
                    href="#"
                    onClick={copy_text("victor.rojas17.09@gmail.com")}
                  >
                    <IoMail className="size-11" />
                    <div className="flex flex-col">
                      <span className="footer-title text-lg mb-0 normal-case">
                        Email
                      </span>
                      victor.rojas17.09@gmail.com
                    </div>
                  </a>
                </li>
                <li
                  className={copyMessage === "" ? "" : "tooltip"}
                  data-tip={copyMessage}
                >
                  <a href="#" onClick={copy_text("+58 0412 9884153")}>
                    <IoLogoWhatsapp className="size-11" />
                    <div className="flex flex-col">
                      <span className="footer-title text-lg mb-0 normal-case">
                        Telefono
                      </span>
                      +58 0412 9884153
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/victordrl" target="_blank">
                    <IoLogoGithub className="size-11" />
                    <div className="flex flex-col">
                      <span className="footer-title text-lg mb-0 normal-case">
                        Git
                      </span>
                      victordrl - PILON
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
