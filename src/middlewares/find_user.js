const User = require('../models/user.js')
async function findUser(req, res, next) {
  const {id} = req.params
  const user = await User.findByPk(id)
  if(!user) {
    return res.status(404).json({message: 'user does not exist'})
  }
  req.user = user
  return next()
}

module.exports = findUser
