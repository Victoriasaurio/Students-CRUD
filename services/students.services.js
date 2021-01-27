const exec = require('../repository/execute')

async function getStudents() {
    let sql = `SELECT * FROM students`
    let data = await exec.execute(sql)
    return data
}

async function postStudents(body) {
    let sql = `INSERT INTO students (name, lastname) VALUES ('${body.name}', '${body.lastname}')`
    let data = await exec.execute(sql)
    return data
}

async function putStudents(id, body) {
    let sql = `UPDATE students SET name='${body.name}', lastname='${body.lastname}' WHERE id=${id.id}`
    let data = await exec.execute(sql)
    return data
}

async function deleteStudents(id) {
    let sql = `DELETE FROM students WHERE id=${id.id}`
    let data = await exec.execute(sql)
    return data
}

module.exports = {
    getStudents,
    postStudents,
    putStudents,
    deleteStudents
}