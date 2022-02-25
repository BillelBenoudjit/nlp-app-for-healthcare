import React from 'react'

function Entity({ namedEntity }) {
    const tagsColorMapping = {
        examen: { backgroundColor: "#eeefb2" },
        dose: { backgroundColor: "#a09ce0" },
        traitement: { backgroundColor: "#887675" },
        anatomie: { backgroundColor: "#482856" },
        age: { backgroundColor: "#955e48" },
        mode: { backgroundColor: "#ff7bab" },
        valeur: { backgroundColor: "#dcefed" },
        frequence: { backgroundColor: "#95e66e" },
        origine: { backgroundColor: "#4a6a48" },
        duree: { backgroundColor: "#dd9a00" },
        sosy: { backgroundColor: "#aa6353" },
        genre: { backgroundColor: "#3d68ae" },
        pathologie: { backgroundColor: "#635428" },
        substance: { backgroundColor: "#802f00" },
        issue: { backgroundColor: "#5583a2" },
        moment: { backgroundColor: "#f1b875" },
        date: { backgroundColor: "#d7d6ea" },
        dfault: { backgroundColor: "#fff" }
    }

    return (
        <span style={tagsColorMapping[namedEntity.tag] || tagsColorMapping.default}>
            {namedEntity.entity}
            <span style={{ fontWeight: 'bold', fontSize: "2vh" }}>
                {namedEntity.tag ? ` ${namedEntity.tag}` : " "}
            </span>
        </span>
    )
}

export default Entity