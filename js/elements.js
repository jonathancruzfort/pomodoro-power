import app from "./app.js"

export default {
    selectType: document.querySelector('[data-js="type"]'),
    display: document.querySelector('[data-js="display"]'),
    playBtn: document.querySelector("[data-js='play']"),
    // iframe: document.querySelector('[data-iframe="https://www.youtube.com/embed/oXcce4M_VmY?si=ZQCIvo9tKZWYfVwA"]'),

    evets() {
        this.selectType.addEventListener('change', () => app.changeTypeTimer())
        this.playBtn.addEventListener('click', e => app.handleClickPlayBtn(e))
    },
}