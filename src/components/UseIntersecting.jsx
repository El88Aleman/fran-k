import { useEffect, useRef, useState } from "react";

const UseIntersecting = () => {
  const elementoRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
      }
    );
    if (elemento) {
      observer.observe(elemento);
    }
    return () => {
      if (elemento) {
        observer.unobserve(elemento);
      }
    };
  }, []);
  return [elementoRef, isIntersecting];
};

export default UseIntersecting;
