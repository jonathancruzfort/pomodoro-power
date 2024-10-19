import data from "./data.js";
import el from "./elements.js";
import templates from "./templates.js";
import render from "./render.js";

export default {
    myWorker: null,

    loadPage() {
        el.evets()
        this.renderTimeTypes()
        this.setDataComingFromStorage()
        this.loadDisplay()

        console.log(document.querySelector('video'));
        
    },
    
    loadDisplay() {
        this.setCurrentTime()
        this.updateDisplay(data.currentTime)
    },

    renderTimeTypes() {
        const { types } = data
        const { selectTypes } = templates

        render.select(types, selectTypes, el.selectType)
    },
    
    setCurrentTime() {
        data.getCurrentTime(el.selectType.value)
    },

    updateDisplay({ time }) {
        el.display.innerText = this.getDisplayFormat(time)
    },

    getDisplayFormat({ hours, minutes, seconds }) {
        const digitHours = this.getDigitFormat(hours)
        const digitMinutes = this.getDigitFormat(minutes)
        const digitSeconds = this.getDigitFormat(seconds)

        return `${digitHours}:${digitMinutes}:${digitSeconds}`
    },

    getDigitFormat(time) {
        return String(time).length === 1 ? `0${time}` : time
    },

    setDataComingFromStorage() {
        const today = this.getTodayDateFormated()
        const storage = localStorage.getItem(today)
        if (storage) data.times = JSON.parse(storage)
    },

    changeTypeTimer() {        
        this.pauseTimer()
        this.loadDisplay()
    },

    handleClickPlayBtn(e) {
        const startTimer = el.playBtn.innerText === "Play"

        startTimer ? this.startTimer() : this.pauseTimer()
        this.myWorker.onmessage = e =>
            this.handleWorkerReturn(e)
    },

    startTimer() {
        this.togglePlayButton("Pause")
        this.startWorker(data.currentTime.time)
    },

    pauseTimer() {
        this.setItemInData()
        this.pauseWorker()
        this.togglePlayButton("Play")
    },

    startWorker({ hours, minutes, seconds }) {
        this.myWorker = new Worker("./js/worker.js")
        this.myWorker.postMessage({ hours, minutes, seconds })
    },

    pauseWorker() {
        if(this.myWorker) this.myWorker.terminate()
    },

    togglePlayButton(state) {
        el.playBtn.innerText = state
    },

    handleWorkerReturn(e) {
        this.updateDigitsTime(e)
        this.updateDisplay(data.currentTime)
        this.autoSetStorage()
    },

    updateDigitsTime(e) {
        const currentTime = data.currentTime.time

        currentTime.hours = e.data.hours
        currentTime.minutes = e.data.minutes
        currentTime.seconds = e.data.seconds
    },

    autoSetStorage() {
        if (data.currentTime.time.seconds == 1)
            this.setItemInData()
    },

    setItemInData() {
        this.setItemLocalData(data)        
        this.setItemLocalStorage(data)
    },

    setItemLocalStorage({ times }) {
        const todayId = this.getTodayDateFormated()
        const formatedData = JSON.stringify(times)
        localStorage.setItem(todayId, formatedData)  
    },

    setItemLocalData({ currentTime, times }) {
        const { id, time } = currentTime
        const dataTimes = data.get(id, times)
        
        dataTimes
            ? dataTimes.time = { ...time }
            : this.createNewTime(times, id, time)
    },

    createNewTime(times, id, time) {
        if(this.isTimerReset()) return
        times.push(this.getNewTime(id, time))
        data.getCurrentTime(el.selectType.value)
    },

    isTimerReset() {
        const { hours, minutes, seconds }  = data.currentTime.time
        return hours === 0 && minutes === 0 && seconds === 0
    },

    getNewTime(id, time) {
        return {
            id: id || Number(el.selectType.value),
            time: time
        }
    },

    getTodayDateFormated() {
        const date = new Date()

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    },
}