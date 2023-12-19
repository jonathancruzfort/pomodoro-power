export default {
    selectTypes({ id, description }) {
        return `
            <option value="${id}">${description}</option>
        `
    }
}