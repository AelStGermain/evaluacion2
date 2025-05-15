import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import ContactForm from './ContactForm';

const images = [
  '/src/assets/imagen1.jpg',
  '/src/assets/imagen2.jpg',
  '/src/assets/imagen3.jpg',
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ height: '60vh', position: 'relative', overflow: 'hidden' }}>
      {/* Carrusel de fondo */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              height: '60vh',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)', // Leve oscuridad para mejorar contraste del texto
            }}
          />
        ))}
      </Slider>

      {/* Capa blanca semitransparente encima del carrusel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          zIndex: 1,
        }}
      />

      {/* Contenido superpuesto */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          textAlign: 'center',
          color: '#000',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Bienvenido a la Municipalidad de Chol Chol
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Comprometidos con el desarrollo y bienestar de nuestra comunidad.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Ver servicios
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
