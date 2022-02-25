import axios from 'axios'

export const recognizeNamedEntities = async (text) => {
    let results = []
    await axios.post(`${process.env.REACT_APP_BASE_URL}/ner`, { text: text }).then((response) => {
        results = response.data
    })
    return results
}
