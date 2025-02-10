import React, { useRef } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const App = () => {
  const boxRef = useRef(null);

  const fuja = () => {
    const botaoNao = document.getElementById("nao");
    const box = boxRef.current;

    if (!botaoNao || !box) return;

    const larguraBox = box.clientWidth;
    const alturaBox = box.clientHeight;

    const maxX = larguraBox - botaoNao.offsetWidth - 100; // 10px de margem
    const maxY = alturaBox - botaoNao.offsetHeight;

    const aleatorioX = Math.max(0, Math.floor(Math.random() * maxX)); // 10px de margem
    const aleatorioY = Math.max(0, Math.floor(Math.random() * maxY));

    botaoNao.style.left = `${aleatorioX}px`;
    botaoNao.style.top = `${aleatorioY}px`;
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        ref={boxRef}
        sx={{
          backgroundColor: "white",
          width: 500,
          height: 500,
          borderRadius: 2,
          textAlign: "center",
          paddingTop: 5,
          fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3">Boa noite</Typography>
        <img
          src="https://images7.memedroid.com/images/UPLOADED675/5e2d5388b027d.jpeg"
          alt=""
          width="350px"
        />
        <Typography variant="h5">Aceita sair comigo?</Typography>
        <Box >
          <Button
            variant="contained"
            color="error"
            href="https://www.youtube.com/watch?v=0mJMW2CzTiA&ab_channel=JohnHerbert"
            sx={{
              height: 40,
              width: 60,
              backgroundColor: "red",
              border: "2px solid black",
              borderRadius: 10,
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
            onMouseOver={fuja} // Funciona no PC
            onClick={fuja} // Funciona no celular
            sx={{
              height: 40,
              width: 60,
              backgroundColor: "red",
              border: "2px solid black",
              borderRadius: 10,
              color: "white",
              position: "absolute",
              transition: "transform 0.2s ease-in-out",
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
