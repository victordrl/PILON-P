//ESTUDIOS
export default function Education() {
  return (
    <div id="educ">
      <div className="flex flex-col items-center ">
        <h2 className="sub-title">Educación</h2>
        <div className="bg-base-200 min-h-min p-8 transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-content">
          <div className=" text-center">
            <div className="max-w-md">
              <h3 className="mini-title font-bold sm:whitespace">
                Universidad Nororiental Privada
                <br />
                "Gran Mariscal de Ayacucho"
                <br />
                (UGMA)
              </h3>
              <p className="py-6 text-lg">
                Estudiante en ingeneria informatica <br />
                2021 - 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
