import React from 'react'

function Entity({ namedEntity, model }) {
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
        default: { backgroundColor: "#fff" }
    }
    const EnglishTagsColorMapping = {
        disease: { backgroundColor: "#dd9a00" },
        Disease: { backgroundColor: "#dd9a00" },
        chemical: { backgroundColor: "#5583a2" },
        Chemical: { backgroundColor: "#5583a2" },
        Immaterial_anatomical_entity: { backgroundColor: "#eeefb2" },
        Developing_anatomical_structure: { backgroundColor: "#a09ce0" },
        Pathological_formation: { backgroundColor: "#887675" },
        Cancer: { backgroundColor: "#482856" },
        Gene_or_gene_product: { backgroundColor: "#955e48" },
        Anatomical_system: { backgroundColor: "#ff7bab" },
        Organism_substance: { backgroundColor: "#dcefed" },
        Amino_acid: { backgroundColor: "#95e66e" },
        Tissue: { backgroundColor: "#4a6a48" },
        Organism: { backgroundColor: "#dd9a00" },
        Organism_subdivision: { backgroundColor: "#aa6353" },
        Cellular_component: { backgroundColor: "#3d68ae" },
        Simple_chemical: { backgroundColor: "#635428" },
        Cell: { backgroundColor: "#802f00" },
        Multi_tissue_structure: { backgroundColor: "#5583a2" },
        Organ: { backgroundColor: "#f1b875" },
        default: { backgroundColor: "#fff" }
    }

    return (
        <span className={namedEntity.tag ? "entity" : ""} style={model === "Camembert/DEFT - FR" ?
            tagsColorMapping[namedEntity.tag] || tagsColorMapping.default
            : EnglishTagsColorMapping[namedEntity.tag] || EnglishTagsColorMapping.default
        }>
            {namedEntity.entity}
            <span className="tag">
                {namedEntity.tag ? ` ${namedEntity.tag}` : " "}
            </span>
        </span>

    )
}

export default Entity