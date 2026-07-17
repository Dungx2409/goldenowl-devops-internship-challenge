const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const responseJson = {
        message: 'Welcome warriors to Golden Owl!. My name is Dung Luong and I am a DevOps Intern here. I am excited to be part of this amazing team and looking forward to contributing to the success of the company. Thank you for having me on board!',
    }
    res.json(responseJson)
})

module.exports = router
