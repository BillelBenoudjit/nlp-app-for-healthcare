import { useState } from 'react';
import './App.css';
import { Container } from 'reactstrap'

import Header from './components/Header/Header';
import EntityRecognition from './components/EntityReconition/EntityRecognition'

function App() {
  const [text, setText] = useState("")
  const [namedEntities, setNamedEntities] = useState([])
  const [model, setModel] = useState("Camembert - FR")

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#fff",
        color: "#000"
      }}
    >
      <Container
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
      >
        <Header
          text={text}
          setText={setText}
          setNamedEntities={setNamedEntities}
          model={model}
          setModel={setModel}
        />
        <EntityRecognition model={model} namedEntities={namedEntities} />
      </Container>
    </div >
  );
}

export default App;
