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

module.exports = {
    validate
}