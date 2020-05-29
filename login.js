const express = require('express')
const router = express.Router()
const crypto = require('crypto')

router.post('/', (req, res) => {
    if (req.body.userName != 'test1') {
        res.status(200).json({
            'message': 'User not found'
        })
    } else if (req.body.password != '1234') {
        res.status(200).json({
            'message': 'Incorrect password'
        })
    } else {
        const loginDetails = {
            'message': 'Login Successfully',
            'token': crypto.randomBytes(64).toString('hex')
        }
        res.status(200).json({
            'status': 'true',
            'data': loginDetails

        })
    }
})

module.exports = router