const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const responseJson = {
        message: 'Welcome warriors to Golden Owl!. My name is Dung!. I am a DevOps Intern at Golden Owl. I am excited to be part of this amazing team and looking forward to learning and growing with them. Thank you for the opportunity!',
    }
    res.json(responseJson)
})

module.exports = router
