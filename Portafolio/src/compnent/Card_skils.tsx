// CARD INFO SKILS

interface Props {
  children: React.ReactNode;
  titulo: string;
  contenido: string;
}

export default function CardInfo({ children, titulo, contenido }: Props) {
  let badgeClass = "badge badge-xs mx-1";
  switch (contenido) {
    case "Avanzado":
      badgeClass += " badge-primary";
      break;
    case "Intermedio":
      badgeClass += " badge-secondary";
      break;
    case "Básico":
      badgeClass += " badge-accent";
      break;
    default:
      badgeClass += " badge-accent";
      break;
  }

  return (
    <div className="flex w-[260px] py-4">
      {children}
      <div className="flex flex-col justify-center p-2 gap-1">
        <div>{titulo}</div>
        <div className="flex justify-center text-xs uppercase font-semibold opacity-60 ite">
          <div className={badgeClass}></div>
          {contenido}
        </div>
      </div>
    </div>
  );
}
