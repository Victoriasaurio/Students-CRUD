const { getConnection } = require('./connection/connection')

async function execute(sql) {
    try {
        return (await getConnection()).execute(sql) // Porque es una función - await getConnection()
    } catch(err) {
        console.log('Error on execute', err)
    }
}

module.exports = {
    execute
}