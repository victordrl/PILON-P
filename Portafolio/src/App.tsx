
import { useState } from 'react';

import './App.css'
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  const [copyMessage, setCopyMessage] = useState("");

  const copy_text = (text: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopyMessage("Copiado");
          
          setTimeout(() => setCopyMessage(""), 500);
        })
        .catch(err => console.error("Error", err));
    };
  };

  return (
    <>
      <header className='navbar justify-center bg-base-300 min-h-max p-10'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='float-start text-base-content break-words max-w-screen sm:w-2/4 p-10 gap-6'>
            <h1 className='text-8xl font-bold'>Desarrollador Backend</h1>
            <h2 className='text-5xl font-semibold'> Nombre Apellido</h2>
            <h3 className='text-3xl font-light'>Estudiante de ingeneria informatic</h3>
            <p className='text-lg'>
              weqwewqeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
          </div>
          <div className='self-center'>
            <img src="/kirby.png" alt="icono" className='bg-cover mask mask-squircle'/>
          </div>
        </div>
      </header>

      <main>
        
      </main>
      <section></section>

      <footer className='footer sm:footer-horizontal footer-vertical bg-primary text-primary-content p-10 justify-center'>
        <aside>
          <div className='mask mask-squircle w-24 my-4'>
            <img src="/kirby.png" alt="icono" className='bg-cover'/>
          </div>
        <p className='text-lg'>
          Victor Rojas
          <br />
          Ingeniero en informatic
          <br />
          Estudiante de Ingeniería en Informática,
          apasionado por la tecnología y el diseño.
        </p>
      </aside>
      <nav>
        <ul className="menu bg-primary rounded-box w-56">
          <li>
            <h6 className="footer-title text-2xl">Social</h6>
            <ul>
              <li className={copyMessage === '' ? '' : 'tooltip'} data-tip={copyMessage}><a href='#' onClick={copy_text('victor.rojas17.09@gmail.com')}><IoMail size={42}/> victor.rojas17.09@gmail.com </a></li>
              <li className={copyMessage === '' ? '' : 'tooltip'} data-tip={copyMessage}><a href='#' onClick={copy_text('+58 0412 9884153')}><IoLogoWhatsapp size={42}/> +58 0412 9884153 </a></li>
              <li><a href='https://github.com/victordrl' target='_blank'><IoLogoGithub size={42}/> victordrl - PILON </a></li>
            </ul>
          </li>
        </ul>
      </nav>
      </footer>
    </>
  )
}

export default App
