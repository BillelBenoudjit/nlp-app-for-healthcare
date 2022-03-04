import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { recognizeNamedEntities } from '../../modules/namedEntityRecognition'

import './Header.css'

function Header({ text, setText, setNamedEntities, model, setModel }) {

    const onTextChange = e => setText(e.target.value)

    const onModelChange = e => {
        setModel(e.target.value)
    }

    const handleSubmit = (e) => {
        let url = ""
        switch (model) {
            case "Camembert - FR":
                url = "camembert"
                break
            case "Bio_ClinicalBert - EN":
                url = "clinicalbert"
                break
            case "BlueBert - EN":
                url = "bluebert"
                break
            default:
                url = ""
        }
        url ? recognizeNamedEntities(text, url).then(
            result => {
                setNamedEntities(result)
            }
        ).catch(error => {
            console.log(error)
        })
            : alert("Modèle indisponible!")
    }

    return (
        <div className="header">
            <div className="inputs">
                <h1 className="select title">
                    Veuillez introduire le texte à analyser.
                </h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleText">Reconnaissance d'entité nommée</Label>
                        <Input type="textarea" name="text" id="exampleText" onChange={onTextChange} />
                    </FormGroup>
                    <Input style={{ width: "50%", display: "inline", marginRight: "10px" }} type="select" onChange={onModelChange}>
                        <option>Camembert - FR</option>
                        <option>Bio_ClinicalBert - EN</option>
                        <option>BlueBert - EN</option>
                    </Input>
                    <Button style={{ display: "inline" }} onClick={handleSubmit}>Soumettre</Button>
                </Form>
            </div>
        </div>
    )
}

export default Header