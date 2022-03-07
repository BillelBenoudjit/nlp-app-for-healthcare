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

    const displayModelDetails = (model) => {
        switch (model) {
            case "Camembert/DEFT - FR":
                return "CamemBERT est un modèle linguistique de pointe pour le français basé sur le modèle RoBERTa. Il a été affiné en utilisant le"
                    + " dataset CAS du challege DEFT 2020 avec 717 fichiers et 12150 annotations."
            case "Bio_ClinicalBert/NCBI - EN":
                return "Le modèle Bio_ClinicalBERT a été entraîné sur toutes les notes de MIMIC III en se baseant sur BERT. Il a été affiné en utilisant le"
                    + " le NCBI National Center of Bio Technology Information, un ensemble de données sur les mentions de noms de maladies de 793 résumés PubMed."
            case "BlueBert/NCBI - EN":
                return "Un modèle BERT pré-entraîné sur les résumés PubMed et les notes cliniques (MIMIC-III). Il a été affiné en utilisant le NCBI -"
                    + " National Center of Bio Technology Information, un ensemble de données sur les mentions de noms de maladies de 793 résumés PubMed."
            case "BlueBert/BC5CDR - EN":
                return "Un modèle BERT pré-entraîné sur les résumés PubMed et les notes cliniques (MIMIC-III). Il a été affiné en utilisant le corpus BC5CDR"
                    + " qui se compose de 1500 articles PubMed avec 4409 produits chimiques annotés, 5818 maladies et 3116 interactions produit chimique-maladie."
            case "BlueBert/BioNLP13CG - EN":
                return "Un modèle BERT pré-entraîné sur les résumés PubMed et les notes cliniques (MIMIC-III). Il a été affiné en utilisant le corpus BioNLP13CG."
                    + " contenant 16 annotations réliés au domaine médicale."
            default:
                return ""
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
                        <option>Camembert/DEFT - FR</option>
                        <option>Bio_ClinicalBert/NCBI - EN</option>
                        <option>BlueBert/NCBI - EN</option>
                        <option>BlueBert/BC5CDR - EN</option>
                        <option>BlueBert/BioNLP13CG - EN</option>
                    </Input>
                    <Button style={{ display: "inline" }} onClick={handleSubmit}>Soumettre</Button>
                </Form>
                <p>{displayModelDetails(model)}</p>
            </div>
        </div>
    )
}

export default Header