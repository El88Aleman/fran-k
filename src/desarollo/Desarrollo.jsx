import { Typewriter } from "react-simple-typewriter";
import "./Desarollo.css";
import UseIntersecting from "../components/UseIntersecting";

const Desarrollo = () => {
  const [elementoRef, isIntersecting] = UseIntersecting({
    threshold: 0.5,
  });
  const [elementoRef2, isIntersecting2] = UseIntersecting({
    threshold: 0.5,
  });
  const [elementoRef3, isIntersecting3] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div className="containerDesarrollo">
      <div className="containerImagenDesarrollo1">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725419096/Fran-K/qjkxrmb9ipeitg4g2nel.jpg"
          alt="Fran-k blanco y negro"
          className="imgDesarrollo1 imgDesarrollo"
        />
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725419095/Fran-K/vhjobbq4vzzbbqz0h8yd.jpg"
          alt="Fran-K a color"
          className="imgDesarrollo2 imgDesarrollo"
        />
        <div className="textoDesarrollo1" ref={elementoRef}>
          {isIntersecting && (
            <Typewriter
              words={[
                "Nahuel Joaquin Cuffia (Fran K), nació en Esperanza, Argentina el 21 de noviembre de 1997. Inició su carrera artística comorapero a los 15 años, en Franck, prov. de Santa Fe. En representación a su pueblo adoptó el nombre artístico Fran K.",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          )}
        </div>
      </div>
      <div className="containerImagenDesarrollo2">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725419094/Fran-K/mjegpeupkqst5l8ebgzq.jpg"
          alt="Fran-k blanco y negro"
          className="imgDesarrollo3 imgDesarrollo"
        />
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725419095/Fran-K/ysx32uaqn6vss9s25rmk.jpg"
          alt="Fran-K a color"
          className="imgDesarrollo4 imgDesarrollo"
        />
        <div className="textoDesarrollo2" ref={elementoRef2}>
          {isIntersecting2 && (
            <Typewriter
              words={[
                "Se caracteriza por ser versátil y capaz de acoplarse a cualquier ritmo. A lo largo de su carrera desarrolló habilidades para componer canciones de rap, trap, reggaeton y g-funk. En el año 2019 lanzó su primer sencillo en las plataformas y su primer mixtape titulado, “Player”. Años después sale a la escena con un Ep titulado “K-Chondeo”, un proyecto ligado a sus raíces el reggaeton.",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={50}
              delaySpeed={3000}
              className="textoDesarrollo"
            />
          )}
        </div>
        <div className="containerImagenDesarrollo3">
          <div className="textoDesarrollo3" ref={elementoRef3}>
            {isIntersecting3 && (
              <Typewriter
                words={[
                  "Actualmente creando nueva música bajo el sello Oeste Label con varios proyectos audiovisuales en camino y una amplia proyección para el 2024 y los siguentes años.",
                ]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={50}
                delaySpeed={3000}
                className="textoDesarrollo"
              />
            )}
          </div>
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1726008485/Fran-K/aytopvbsbsgdrjdb7mcf.png"
            alt="Fran-K a color"
            className="imgDesarrollo5"
          />
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
