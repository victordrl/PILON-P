//ABOUT ME SECCION

import CardInfo from "../compnent/Card_info";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { SiPagespeedinsights } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";

const data_card = [
  {
    children: <BsPcDisplayHorizontal className="size-16" />,
    titulo: ".exe",
    contenido: "Diseño y desarrollo de aplicaciones de escritorio",
  },
  {
    children: <SiPagespeedinsights className="size-16" />,
    titulo: "</>",
    contenido: "Creación de sitios Web responsivos y dinámicos",
  },
  {
    children: <AiFillDatabase className="size-16" />,
    titulo: "SQL",
    contenido: "Analisis de datos, Diseño y matenimiento DB",
  },
];

export default function About_Me() {
  return (
    <main id="me" className="">
      <h2 className="sub-title"> Sobre Mi </h2>
      <p className="text-center sm:text-lg text-md p-4">
        Hola, soy Victor Rojas, estudiante de Ingeniería Informática apasionado
        por escribir código y Me entusiasma colaborar en proyectos que
        representen desafíos reales, donde pueda aplicar mi creatividad y seguir
        aprendiendo cada día.
        <br />
        Experiencia en el uso de herramientas estadísticas y software de
        análisis de datos, con habilidades para diseñar reportes y
        visualizaciones que faciliten la comprensión de patrones y tendencias
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {data_card.map((data, index) => (
          <CardInfo key={index} titulo={data.titulo} contenido={data.contenido}>
            {data.children}
          </CardInfo>
        ))}
      </div>
    </main>
  );
}
