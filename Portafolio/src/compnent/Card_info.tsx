// CARD INFO ABOUNT ME

interface Props {
  children: React.ReactNode;
  titulo: String;
  contenido: String;
}

export default function CardInfo({ children, titulo, contenido }: Props) {
  return (
    <div className="card min-h-40 bg-base-100 text-base-content text-center text-lg p-6  items-center">
      <figure>{children}</figure>
      <div className="card-title text-2xl"> {titulo} </div>
      <div className="max-w-2xs pt-2 font-light opacity-85"> {contenido}</div>
    </div>
  );
}
