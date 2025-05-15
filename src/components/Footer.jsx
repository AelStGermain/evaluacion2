import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ px: 4 }}>
        <Typography variant="h6" gutterBottom>
          Municipalidad de Chol Chol
        </Typography>

        <Typography variant="body2" sx={{ color: 'white' }}>
          Dirección: Av. Sargento Aldea #490, Chol Chol, Región de La Araucanía, Chile
        </Typography>

        <Typography variant="body2" sx={{ color: 'white' }}>
          Teléfono: +56 45 256 6789 | Correo: contacto@municholchol.cl
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Municipalidad de Chol Chol. Todos los derechos reservados.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Link href="#" underline="hover" color="inherit" sx={{ mr: 2 }}>
            Inicio
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mr: 2 }}>
            Transparencia
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mr: 2 }}>
            Trámites y Servicios
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Contacto
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
