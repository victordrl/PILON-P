//PORTAFOLIO CUADRICULA

import Card_P from "../compnent/Card_proyecto";

export default function Portafolio() {
  const proyectos = [
    {
      nombre: "Puzzle",
      descripcion: "Juego de rompecabezas, aplicación de escritorio",
      lenguajes: ["C++", "Visual Studio 2022"],
      image: "puzzle_img.png", // ruta a tu imagen
      path: "https://github.com/victordrl/PUZZLE",
    },
    {
      nombre: "Poker Online",
      descripcion: "Registro y creación de múltiples salas de juego",
      lenguajes: ["React TS", "Tailwind CSS", "Python", "FastAPI"],
      image: "poker_img.png", // ruta a tu imagen
      path: "https://github.com/victordrl/POKER",
    },
    {
      nombre: "Gestor de Encuestas",
      descripcion:
        "Entrega encuestas por correo, aplica filtros y visualiza los datos",
      lenguajes: ["Python", "Qt Studio"],
      image: "encuesta_img.png", // ruta a tu imagen
      path: "https://github.com/victordrl/SURVEY-MNAGER",
    },
    {
      nombre: "Administrador de Horario",
      descripcion: "Crea, organiza y apila horarios sin colisiones",
      lenguajes: ["React TS", "Tailwind CSS"],
      image: "horario_img.png", // ruta a tu imagen
      path: "https://github.com/victordrl/Hypsi",
    },
  ];

  return (
    <div id="skil" className="flex flex-col bg-base-300 w-full p-6">
      <h2 className="sub-title">Mis Proyectos</h2>
      <div className="grid sm:place-items-center sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 shadow py-4">
        {proyectos.map((proyecto, index) => (
          <Card_P
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            lenguajes={proyecto.lenguajes}
            image={proyecto.image}
            path={proyecto.path}
          />
        ))}
      </div>
    </div>
  );
}
