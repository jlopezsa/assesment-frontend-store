/* eslint-disable max-len */
import './AboutPage.scss';
import jjlsPicture from '../figures/jjls_image.png';

function AboutPage() {
  return (
    <div className="countAbout">
      <div className="countAbout__top">
        <div className="countAbout__top--figure">
          <img className="countAbout__top--figureJul" src={jjlsPicture} alt="" />
        </div>
      </div>
      <div className="countAbout__button">
        <div className="countAbout__button--name">
          <p>
            Julián Jair López Salamanca
          </p>
        </div>
        <div className="countAbout__button--description">
          <p>
            Hola, soy Julián López, ingeniero en telecomunicaciones y actualmente me desenvuelvo como desarrollador full-stack en el bootcamp de Make It Real. Me gusta unir la programación, la lógica y la matemática, para proponer soluciones a diversos problemas.
          </p>
          <p>
            Siempre dispuesto y apasionado en aprender y aplicar nuevas tecnologías para el desarrollo de software.
          </p>
          <p>
            En momentos de esparcimiento me encanta escuchar música, preparar y experimentar nuevas (o clásicas) recetas de cocina.
          </p>
        </div>
        <div className="countAbout__button--learned">
          <p>
            Durante el desarrollo de este proyecto tres cosas que aprendí fueron:
          </p>
          <ul>
            <li>Dominio en CSS y SCSS</li>
            <li>Extraer datos de una API externa</li>
            <li>Comunicación entre componentes hijo-padre-hijo y entre rutas.</li>
            <li>Transición entre páginas según una condición (por ejemplo, time over)</li>
          </ul>
        </div>
        <div className="countAbout__button--contact">
          <div className="countAbout__button--contact-email">
            <p>Mi correo electrónico es: jlopezsa@gmail.com</p>
          </div>
          <div className="countAbout__button--contact-git">
            <a href="https://github.com/jlopezsa" target="_blank" rel="noreferrer">Visitame en GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
