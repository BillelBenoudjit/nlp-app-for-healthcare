import React, { useState } from 'react'

import { Container } from 'reactstrap'

import Header from '../../components/Header/Header';
import EntityRecognition from '../../components/EntityReconition/EntityRecognition'

function Ner() {
    const [text, setText] = useState("")
    const [namedEntities, setNamedEntities] = useState([])
    const [model, setModel] = useState("Camembert/DEFT - FR")
    return (
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
    )
}

export default Ner