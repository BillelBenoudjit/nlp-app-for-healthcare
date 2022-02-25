import { useState } from 'react';
import './App.css';
import { Container, Switch, withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

import Header from './components/Header/Header';
import EntityRecognition from './components/EntityReconition/EntityRecognition'

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [text, setText] = useState("")
  const [namedEntities, setNamedEntities] = useState([])

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#fff",
        color: "#000"
      }}
    >
      <Container
        maxWidth='md'
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
      >
        {/* <div style={{ position: "absolute", top: "0", right: "15px", paddingTop: "10" }}>
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <ThemeSwitch checked={lightMode} onChange={() => setLightMode(!lightMode)} />
        </div> */}
        <Header
          text={text}
          setText={setText}
          setNamedEntities={setNamedEntities}
        />
        <EntityRecognition text={text} namedEntities={namedEntities} />
      </Container>
    </div >
  );
}

export default App;
