export default {
    select(data, template, el) {
        const options = data.map(cur => template(cur))
        el.innerHTML = options
    },
}