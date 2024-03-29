import app from "./app.js"

export default {
    selectType: document.querySelector('[data-js="type"]'),
    display: document.querySelector('[data-js="display"]'),
    playBtn: document.querySelector("[data-js='play']"),

    evets() {
        this.selectType.addEventListener('change', () => app.changeTypeTimer())
        this.playBtn.addEventListener('click', e => app.handleClickPlayBtn(e))
    },
}