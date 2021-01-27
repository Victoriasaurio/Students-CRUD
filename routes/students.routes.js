const { Router } = require('express')
const router = Router()
const Students = require('../controllers/students.controller')
const { validate } = require('../middleware/students.middleware')

router.get('/', async (req, res) => {
    try {
      let data = await Students.getStudents()
        return res.status(200).send({
            status: 200,
            msg: 'Success',
            data: data[0]
        })  
    } catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let { body } = req
        let valid = validate(body)
        if(!valid) return res.status(400).send({status: 400, msg: 'Invalid data (name o lastname)'})
        let data = await Students.postStudents(body)
        return res.status(201).send({
            status: 201,
            msg: 'Student created',
            data: {'id: ': data[0].insertId}
        })
    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let id = req.params
        let {body} = req
        let valid = validate(body)
        if(!valid) return res.status(400).send({status: 400, msg: 'Invalid data (name o lastname)'})
        await Students.putStudents(id, body)
        return res.status(201).send({
            status: 201,
            msg: 'Updated student',
            data: id
        })
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let id = req.params
        await Students.deleteStudents(id)
        return res.status(200).send({
            status: 200,
            msg: 'Eliminated student',
            data: id
        })
    } catch(err) {
        console.log(err)
    }  
})

module.exports = router