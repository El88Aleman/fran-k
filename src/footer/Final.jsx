import "./Final.css";
import { FaSpotify, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { canciones } from "./musica";
import Spotify from "../assets/spotifyImg/Spotify";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Final = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="containerFinal">
      <div className="spotify">
        <Spotify />
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725364798/Fran-K/jvvpurok1sqqmmbyp7yd.png"
          className="logoFranK"
        />
      </div>
      {(showAll ? canciones : canciones.slice(0, 3)).map((cancion) => (
        <div key={cancion.id} className="albums">
          {cancion.album ? (
            <a href={cancion.urlSpotify} target="_blank" className="urlSpoty">
              <div className="album-item disco">
                <img
                  src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1726064435/Fran-K/k91lpncxviwtj6jnycdx.png"
                  alt="disco"
                  className="discoImagen"
                />
                <img
                  className="tapaDeAlbum"
                  src={cancion.urlImg}
                  alt="tapa de disco"
                />
                <div className="cajaTextoAlbum">
                  <p className="nombreAlbum">{cancion.album}</p>
                </div>
              </div>
            </a>
          ) : (
            <a href={cancion.urlSpotify} target="_blank" className="urlSpoty">
              <div className="sencillo">
                <img
                  src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1726064433/Fran-K/gdfeutvsxyymepz6kjv1.png"
                  alt="disco"
                  className="signoMusical"
                />
                <div className="cajaTextoSencillo">
                  <p className="nombreSencillo">{cancion.sencillo}</p>
                </div>
              </div>
            </a>
          )}
        </div>
      ))}
      {!showAll && (
        <div className="verMas" onClick={handleShowAll}>
          <AiOutlinePlus className="botonVerMas" size={35} />
        </div>
      )}
      <div className="iconos">
        <a href="https://wa.me/5493492243495" target="_blank" className="icon">
          <FaWhatsapp className="whatsapp" size={60} />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/153W57rqvZobpYB3nqLbDc?si=mKgp1M6NQbCYdFDvy3pJRg"
          target="_blank"
          className="icon"
        >
          <FaSpotify className="spotify-icon" size={60} />
        </a>
        <a
          href="https://www.youtube.com/@fran_k247"
          target="_blank"
          className="icon"
        >
          <FaYoutube className="youtube" size={60} />
        </a>
      </div>
      <div className="logos">
        <div className="logoMio">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725361738/gtwaakcwaoxijerm22oh.png"
            alt="Logo Mio"
            className="imgLogoMio"
          />
        </div>
        <div className="oesteLabel">
          <a href="https://www.oestelabel.com/" target="_blank">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725364798/Fran-K/fcfigbjc7zlnszhrea2a.png"
              alt="Oeste Label"
              height="70px"
              width="60px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Final;
