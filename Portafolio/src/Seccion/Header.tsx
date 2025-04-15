// HEADER SECCION
import { useState } from "react";

import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { HiDocumentArrowDown } from "react-icons/hi2";

export default function Header() {
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
    <header className="navbar justify-center bg-base-300 min-h-[80vh] p-10">
      <div className="card card-border bg-base-100 text-base-content shadow-2xl w-[400px] p-4">
        <figure className="self-center -mx-6">
          <img
            src="/kirby.png"
            alt="icono"
            className="bg-cover mask mask-squircle"
          />
        </figure>
        <div className="flex card-body text-center justify-center">
          <h1 className="font-semibold text-2xl">Desarrollador de Sowtfare</h1>
          <p className="font-light text-xl">Victor Daniel Rojas Lopez</p>
          <div className="menu menu-horizontal bg-base-300 rounded-box md:gap-8 gap-2 m-auto">
            <a
              href="https://github.com/victordrl"
              target="_blank"
              className="tooltip"
              data-tip={copyMessage === "" ? "Git" : copyMessage}
            >
              <IoLogoGithub className="sm:size-11 size-7" />
            </a>
            <a
              href="#"
              onClick={copy_text("+58 0412 9884153")}
              className="tooltip"
              data-tip={copyMessage === "" ? "Whatsapp" : copyMessage}
            >
              <IoLogoWhatsapp className="sm:size-11 size-7" />
            </a>
            <a
              href="#"
              onClick={copy_text("victor.rojas17.09@gmail.com")}
              className="tooltip"
              data-tip={copyMessage === "" ? "Email" : copyMessage}
            >
              <IoMail className="sm:size-11 size-7" />
            </a>
            <a className="tooltip" data-tip="Curriculum">
              <HiDocumentArrowDown className="sm:size-11 size-7" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
