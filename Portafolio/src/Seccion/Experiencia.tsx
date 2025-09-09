//EXPERIENCIA

import Acordeon from "../compnent/Acordeon_exp";

export default function Experiencia() {
  const experiencias = [
    {
      empresa: "Kiari Shop House J & L, C.A.",
      cargo: "Ingeniero Sistemas",
      tiempo: " 2021 - 2025",
      lista: [
        "Desarrollo de página web estática para la empresa, fortaleciendo su presencia digital y facilitando la comunicación comercial.",
        "Supervisión de procesos de producción.",
        "Control de calidad del producto.",
        "Gestión de inventario.",
        "Optimización de operaciones en la producción.",
        "Capacitación técnica al personal.",
      ],
      path: "https://kiari-shop-house-jl.netlify.app/",
      open: true,
    },

    // Puedes agregar más experiencias aquí
  ];
  return (
    <div id="xp" className="">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="sub-title ">Experiencia</h2>
          <div className="w-full">
            {experiencias.map((exp, index) => (
              <Acordeon key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
