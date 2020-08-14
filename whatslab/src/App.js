import React from 'react';
import styled from 'styled-components'

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

const ContainerGeral = styled.div `
height: 100vh;
width: 40vw;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-left: 28vw;
background-color: #dcf8c6;` 



class App extends React.Component {

state = {
  mensagem: [{
    nome: "",
    conteudo: ""
  }],
  valorInputUsuario: "",
  valorInputMensagem: ""
}


onChangeUsuario = (event) => {
this.setState({
  valorInputUsuario: event.target.value
})


} 

onChangeMensagem = (event) => {
  this.setState({
    valorInputMensagem: event.target.value
  })

}

mandarMensagem = () => {

  const novaMensagem = {
    nome: this.state.valorInputUsuario + ":",
    conteudo: this.state.valorInputMensagem
  }

  const novoArrayMsg = [...this.state.mensagem, novaMensagem]

  this.setState({
    mensagem: novoArrayMsg,
    valorInputUsuario: "",
    valorInputMensagem: ""
  })

}



  render() {

  const listaMensagem = this.state.mensagem.map((msg) => {

    return (
      <div>
        <p>{msg.nome} {msg.conteudo}</p>
      </div>
    )
  })






  return (

    <ContainerGeral>{listaMensagem}
    <div>
    <InputUsuario
         
              value={this.state.valorInputUsuario}
              onChange={this.onChangeUsuario}
              placeholder={"Nome do Usuario"} />
           <InputMensagem
             
              value={this.state.valorInputMensagem}
              onChange={this.onChangeMensagem}
              placeholder={"Digite uma mensagem"} />
     
           <BotaoEnviar onClick={this.mandarMensagem} type="submit">Enviar</BotaoEnviar>
           </div>
    </ContainerGeral>
  );
  }
}

export default App;
