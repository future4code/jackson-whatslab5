import React from 'react';
import styled from "styled-components"


const QuadroBorda = styled.section `
margin-left: 28vw;
margin-right: 25vw;
border: solid;
height: 98vh; 
width: 40vw;
background-color: #dcf8c6;
display:flex;
align-items: flex-end;
`

const InputMensagem = styled.input `
width: 20vw; 
height: 3vh; `

const InputUsuario = styled.input `
width: 10vw; 
height: 3vh;`

const BotaoEnviar = styled.button `
width: 9.15vw;
height: 4vh;
background-color: #075e54;
color: white;` 



function App() {
  return (
    <div>

      <QuadroBorda>

     <div>
      <InputUsuario
         
         value={""}
         onChange={""}
         placeholder={"Nome do Usario"} />
      <InputMensagem
        
         value={""}
         onChange={""}
         placeholder={"Digite uma mensagem"} />

      <BotaoEnviar>Enviar</BotaoEnviar>

      </div>


      </QuadroBorda>
  
    </div>
  );
}




export default App;
