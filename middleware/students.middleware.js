function validate(body) {
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length > 0) {
        if(body.hasOwnProperty('name') && body.name !== '' && body.name.length >= 3) {
            if(body.hasOwnProperty('lastname') && body.lastname !== '' && body.lastname.length >= 2) {
                ok = true
            }
        }
    }
    return ok
}

// Devuelve un TRUE cuando el valor no es un número.
const validateId = (id) => !isNaN(id)

function validateIdDB(id, data) {
    let ok = false
    let user = data[0]
    for (let i=0; i < user.length; i++) {
        let userId = user[i].id // Obtiene el id del usuario
        if(userId == id) {
            ok = true
        }
    }
    return ok
}

module.exports = {
    validate,
    validateId,
    validateIdDB
}