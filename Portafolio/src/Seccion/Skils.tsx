//MIS HABILIDADES

import CardSkils from "../compnent/Card_skils";

const skillsData = [
  {
    titulo: "Python",
    children: (
      <img
        src="Python.svg"
        alt="python logo"
        className="sm:size-14 size-10"
      ></img>
    ),
    contenido: "Avanzado",
  },
  {
    titulo: "C/C++",
    children: (
      <div className="flex">
        <img src="C.svg" alt="c logo" className="sm:size-14 size-10"></img>
        <img
          src="C++ (CPlusPlus).svg"
          alt="c++ logo"
          className="sm:size-14 size-10 -ml-4"
        ></img>
      </div>
    ),
    contenido: "Avanzado",
  },
  {
    titulo: "JavaScript",
    children: (
      <div className="flex">
        <img
          src="Node.js.svg"
          alt="js logo"
          className="sm:size-14 size-10"
        ></img>
        <img
          src="JavaScript.svg"
          alt="js logo"
          className="sm:size-14 size-10 -ml-4"
        ></img>
      </div>
    ),
    contenido: "Intermedio",
  },
  {
    titulo: "HTML/CSS",
    children: (
      <div className="flex">
        <img
          src="HTML5.svg"
          alt="html5 logo"
          className="sm:size-14 size-10"
        ></img>
        <img
          src="CSS3.svg"
          alt="css3 logo"
          className="sm:size-14 size-10 -ml-4"
        ></img>
        {/* <img
          src="Tailwind CSS.svg"
          alt="css3 logo"
          className="sm:size-14 size-10 -ml-4"
        ></img> */}
      </div>
    ),
    contenido: "Avanzado",
  },
  {
    titulo: "TypeScript",
    children: (
      <img
        src="TypeScript.svg"
        alt="js logo"
        className="sm:size-14 size-10"
      ></img>
    ),
    contenido: "Aprendiendo",
  },
];

const toolsData = [
  {
    titulo: "React",
    children: (
      <img src="React.svg" alt="React logo" className="sm:size-14 size-10" />
    ),
    contenido: "Intermedio",
  },
  {
    titulo: "MySQL",
    children: (
      <img src="MySQL.svg" alt="MySQL logo" className="sm:size-14 size-10" />
    ),
    contenido: "Avanzado",
  },
  {
    titulo: "Qt Designer",
    children: (
      <img
        src="Qt Framework.svg"
        alt="Qt Designer logo"
        className="sm:size-14 size-10"
      />
    ),
    contenido: "Básico",
  },
  {
    titulo: "Git",
    children: (
      <img
        src="GitHub.svg"
        alt="Git logo"
        className="sm:size-14 size-10 invert"
      />
    ),
    contenido: "Avanzado",
  },
  {
    titulo: "TensorFlow",
    children: (
      <img
        src="TensorFlow.svg"
        alt="TensorFlow logo"
        className="sm:size-14 size-10"
      />
    ),
    contenido: "Aprendiendo",
  },
];

export default function Skils() {
  return (
    <div className="flex flex-col mx-auto  px-4">
      <h2 className="sub-title">Mis Habilidades</h2>

      <h3 className="mini-title">Lenguajes de programación</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 shadow p-4">
        {skillsData.map((skill, index) => (
          <CardSkils
            key={index}
            titulo={skill.titulo}
            contenido={skill.contenido}
          >
            {skill.children}
          </CardSkils>
        ))}
      </div>
      <h3 className="mini-title">Tecnologias y Herramientas</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 shadow p-4">
        {toolsData.map((skill, index) => (
          <CardSkils
            key={index}
            titulo={skill.titulo}
            contenido={skill.contenido}
          >
            {skill.children}
          </CardSkils>
        ))}
      </div>
    </div>
  );
}
