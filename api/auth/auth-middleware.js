const jwt = require('jsonwebtoken')

const secrets = require('../../config/secrets')

module.exports = {
  generateToken,
}

function generateToken(newUser) {
  const payload = {
    user_id: newUser.id
  }
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}