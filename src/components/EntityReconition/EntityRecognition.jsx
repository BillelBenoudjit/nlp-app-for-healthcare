import React from 'react'

import Entity from '../Entity/Entity'

import './EntityRecognition.css'

function EntityRecognition({ text, namedEntities }) {
    return (
        <div className="text">
            <h2>Entités reconnues</h2>
            <div className="entities">
                {namedEntities.map((entity, index) => {
                    return (
                        <Entity namedEntity={entity} />
                    )
                })}
            </div>
        </div>
    )
}

export default EntityRecognition