// CARD INFO SKILS

interface Props {
  children: React.ReactNode;
  titulo: string;
  contenido: string;
}

export default function CardInfo({ children, titulo, contenido }: Props) {
  return (
    <div className="flex w-[260px] py-4">
      {children}
      <div className="flex flex-col justify-center p-2 gap-1">
        <div>{titulo}</div>
        <div className="text-xs uppercase font-semibold opacity-60 ite">
          {contenido}
        </div>
      </div>
    </div>
  );
}
