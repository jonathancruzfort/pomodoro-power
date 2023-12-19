export default {
    currentTime: null,

    types: [
        { id: 1, description: "Estudos (Programação - React)"},
        { id: 2, description: "Estudos (Desenvolvimento de games)"},
        { id: 3, description: "Programação (Projetos pessoais)"},
        { id: 4, description: "Estudos (Inglês)"},
        { id: 5, description: "Estudos (História)"},
    ],
    
    times: [],

    get(id, data) {
        return data.find(i => i.id == id)
    },

    getCurrentTime(id) {
        const existingData = this.get(id, this.times)
        this.currentTime = existingData ?
            existingData : this.getHistoryReset()
    },

    getHistoryReset() {
        return { time: { hours: 0, minutes: 0, seconds: 0 } }
    },
}