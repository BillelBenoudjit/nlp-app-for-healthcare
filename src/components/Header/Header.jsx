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
            case "Camembert/DEFT - FR":
                url = "camembert"
                break
            case "Bio_ClinicalBert/NCBI - EN":
                url = "ncbi/clinicalbert"
                break
            case "BlueBert/NCBI - EN":
                url = "ncbi/bluebert"
                break
            case "BlueBert/BC5CDR - EN":
                url = "bc5cdr/bluebert"
                break
            case "BlueBert/BioNLP13CG - EN":
                url = "bionlp13cg/bluebert"
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
                        <option>Camembert/DEFT - FR</option>
                        <option>Bio_ClinicalBert/NCBI - EN</option>
                        <option>BlueBert/NCBI - EN</option>
                        <option>BlueBert/BC5CDR - EN</option>
                        <option>BlueBert/BioNLP13CG - EN</option>
                    </Input>
                    <Button style={{ display: "inline" }} onClick={handleSubmit}>Soumettre</Button>
                </Form>
            </div>
        </div>
    )
}

export default Header