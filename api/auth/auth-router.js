const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')
const mw = require('./auth-middleware')

const router = express.Router()

router.post('/register', (req, res) => {
  const newUser = req.body
  const hash = bcrypt.hashSync(newUser.password, 12)

  newUser.password = hash

  Users.add(newUser)
    .then(user => {
      const token = mw.generateToken(newUser)

      res.status(201).json({ token })
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router