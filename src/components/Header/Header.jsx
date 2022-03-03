import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { recognizeNamedEntities } from '../../modules/namedEntityRecognition'

import './Header.css'

function Header({ text, setText, setNamedEntities, model, setModel }) {

    const onTextChange = e => setText(e.target.value)

    const onModelChange = e => {
        setModel(e.target.value)
    }

    const handleSubmit = (e) => {
        if (model === "Camembert - FR") {
            recognizeNamedEntities(text).then(
                result => {
                    setNamedEntities(result)
                }
            ).catch(error => {
                console.log(error)
            })
        }
        else {
            alert("Modèle indisponible!")
        }
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

                    {/* <DropdownButton onChange={onModelChange} style={{ display: "inline", marginRight: "10px" }} id="dropdown-item-button" title="Modèle">
                        <Dropdown.Item value={"Camembert"}>Camembert - FR</Dropdown.Item>
                        <Dropdown.Item value={"Bio_ClinicalBert"}>Bio_ClinicalBert - EN</Dropdown.Item>
                        <Dropdown.Item value={"BlueBert"}>BlueBert - EN</Dropdown.Item>
                    </DropdownButton> */}
                    <Button style={{ display: "inline" }} onClick={handleSubmit}>Soumettre</Button>
                </Form>
            </div>
        </div>
    )
}

export default Header