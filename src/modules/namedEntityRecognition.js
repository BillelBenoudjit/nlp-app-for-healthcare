import axios from 'axios'

export const recognizeNamedEntities = async (text, model) => {
    let results = []
    await axios.post(`${process.env.REACT_APP_BASE_URL}/ner/${model}`, { text: text }).then((response) => {
        results = response.data
    })
    console.log(results)
    return results
}
