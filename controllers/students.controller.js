const services = require('../services/students.services')

async function getStudents() {
    let data = services.getStudents()
    return data
}

async function postStudents(body) {
    let data = services.postStudents(body)
    return data
}

async function putStudents(id, body) {
    let data = services.putStudents(id, body)
    return data
}

async function deleteStudents(id) {
    let data = services.deleteStudents(id)
    return data
}

module.exports = {
    getStudents,
    postStudents,
    putStudents,
    deleteStudents
}