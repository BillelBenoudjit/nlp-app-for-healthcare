import React from 'react'

import Entity from '../Entity/Entity'

import './EntityRecognition.css'

function EntityRecognition({ text, namedEntities }) {
    return (
        <div className="text">
            <h2>Entités reconnues</h2>
            {namedEntities.map((entity, index) => {
                return (
                    <Entity namedEntity={entity} />
                )
            })}
        </div>
    )
}

export default EntityRecognition