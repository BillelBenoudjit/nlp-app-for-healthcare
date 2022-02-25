import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { recognizeNamedEntities } from '../../modules/namedEntityRecognition'

import './Header.css'

function Header({ text, setText, setNamedEntities }) {

    const onTextChange = e => setText(e.target.value)

    const handleSubmit = (e) => {
        recognizeNamedEntities(text).then(
            result => {
                console.log(result)
                setNamedEntities(result)
            }
        ).catch(error => {
            console.log(error)
        })
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
                    <Button onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Header