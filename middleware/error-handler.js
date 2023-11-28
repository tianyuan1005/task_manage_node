const { CustomAPIError } = require('../errors/custom-error')
const errorHandleMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message })
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again later' })
}

module.exports = errorHandleMiddleware
