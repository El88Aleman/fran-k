import { Image } from "react-bootstrap";
import Desarrollo from "../desarollo/Desarrollo";
import { images } from "./home";
import { motion } from "framer-motion";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    // Si la imagen ya está seleccionada, desmarcarla; de lo contrario, seleccionarla
    setSelectedImage((prev) => (prev === imageId ? null : imageId));
  };

  return (
    <div className="home">
      <div className="imgTitulo">
        <Image
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725371632/Fran-K/kqjr4ohmjdrrbizuk6np.png"
          width="325px"
          height="60px"
        />
      </div>
      <motion.div className="slider-container" layout>
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -1650 }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="item"
              onClick={() => handleImageClick(image.id)} // Controlar la selección
              animate={{
                scale: selectedImage === image.id ? 1.5 : 1,
              }}
              layout // Animar cambios de diseño
              transition={{ duration: 0.5 }}
              style={{ cursor: "pointer", borderRadius: "5px" }}
            >
              <img src={image.url} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Desarrollo />
    </div>
  );
};

export default Home;
