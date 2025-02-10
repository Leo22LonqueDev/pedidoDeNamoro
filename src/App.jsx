import React, { useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const App = () => {
  const containerRef = useRef(null);

  const fuja = () => {
    const botaoNao = document.getElementById("nao");
    const container = containerRef.current;

    if (!botaoNao || !container) return;

    const larguraContainer = container.clientWidth - 1500;
    const alturaContainer = container.clientHeight - 1500;

    const maxX = larguraContainer - botaoNao.offsetWidth;
    const maxY = alturaContainer - botaoNao.offsetHeight;

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = `${aleatorioX}px`;
    botaoNao.style.top = `${aleatorioY}px`;
  };

  return (
    <Container
      ref={containerRef}
      maxWidth
      sx={{
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: 500,
          height: 600,
          borderRadius: 2,
          textAlign: "center",
          paddingTop: 5,
          fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
          position: "relative",
        }}
      >
        <Typography variant="h1">Boa noite</Typography>
        <img
          src="https://images7.memedroid.com/images/UPLOADED675/5e2d5388b027d.jpeg"
          alt=""
          width="400px"
        />
        <Typography variant="h5">Aceita sair comigo?</Typography>
        <Box sx={{ position: "relative", height: 100 }}>
          <Button
            variant="contained"
            color="error"
            href="https://www.youtube.com/watch?v=0mJMW2CzTiA&ab_channel=JohnHerbert"
            sx={{
              height: 40,
              width: 60,
              backgroundColor: "red",
              border: "2px solid white",
              borderRadius: 1,
              color: "white",
              marginRight: 3,
            }}
          >
            Sim!
          </Button>
          <Button
            variant="contained"
            color="error"
            id="nao"
            onMouseOver={fuja}
            sx={{
              height: 40,
              width: 60,
              backgroundColor: "red",
              border: "2px solid white",
              borderRadius: 1,
              color: "white",
              position: "absolute",
            }}
          >
            Não!
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
