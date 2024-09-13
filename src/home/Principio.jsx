import { Image } from "react-bootstrap";
import { imagenes } from "./home.js";
import "./Principio.css";
import { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";

const Principio = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(
      (imagenActual === cantidad - 1 ? 0 : imagenActual + 1) % cantidad
    );
  };

  const anteriorImagen = () => {
    setImagenActual(
      (imagenActual === 0 ? cantidad - 1 : imagenActual - 1) % cantidad
    );
  };

  return (
    <div className="principio">
      <div className="imgTitulo">
        <Image src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1726064433/Fran-K/plcru9w9gjtttwl6bowg.png" />
      </div>
      <div className="containerSlider">
        <div className="buttonAnterior" onClick={anteriorImagen}>
          <BsChevronCompactLeft className="prevIcon" />
        </div>
        <div className="slider">
          {imagenes.map((imagen) => (
            <div
              key={imagen.id}
              className={`slide ${
                imagenActual === imagen.id
                  ? "active"
                  : imagen.id === (imagenActual + 1) % cantidad
                  ? "next"
                  : imagen.id === (imagenActual - 1 + cantidad) % cantidad
                  ? "prev"
                  : ""
              }`}
            >
              <img src={imagen.url} alt={`Imagen ${imagen.id}`} />
            </div>
          ))}
        </div>
        <div className="buttonSiguiente" onClick={siguienteImagen}>
          <BsChevronCompactRight className="nextIcon" />
        </div>
      </div>
    </div>
  );
};

export default Principio;
